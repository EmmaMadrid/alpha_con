import React, { useEffect, useState } from 'react';
import './pagoExitoso.css';
import axios from 'axios'
import QRCode from 'qrcode';


export const PagoExitoso = () => {
  const [ticketType, setTicketType] = useState(null);
  const [qrCodeDataURL, setQrCodeDataURL] = useState(null); // Define qrCodeDataURL en el estado del componente

let key;

  useEffect(() => {
    const storedTicketType = localStorage.getItem('ticketType');
    localStorage.removeItem('ticketType');

    if (storedTicketType) {
      setTicketType(storedTicketType);

      const boleto = {
        estado: "ACTIVO",
        fechaEvento: "23 de Noviembre del 2024", // Fecha actual
        horaEvento: "5 pm",
        tipoBoleto: storedTicketType,
      };
      
      axios.post('https://alpha-con-default-rtdb.firebaseio.com/boletos.json', boleto)
      .then(response => {
        console.log('Boleto agregado correctamente');
        console.log('Datos del boleto:', boleto);
        console.log('Clave del boleto:', response.data.name);
        key = response.data.name; // Asigna el valor a 'key'
        console.log(key); // Ahora puedes acceder a 'key' en este alcance
        
        const qrCodeDataURL = generarCodigoQR(key)

      })
      .catch(error => {
        console.error('Error al agregar boleto:', error);
      });
    }
    generarCodigoQR(key).then(setQrCodeDataURL); // Guarda el resultado en el estado

  }, []);
      // Función para generar el código QR
      const generarCodigoQR = async (key) => {
        const textoQR = `localhost:5173/${key}`;
        try {
          const qrCodeDataURL = await QRCode.toDataURL(textoQR);
          return qrCodeDataURL;
        } catch (error) {
          console.error('Error al generar el código QR:', error);
        }
      };

  return (
    <div className='pago-exitoso'>
      <div className="boxxx">
        <h1>¡Pago Exitoso!</h1>
        {ticketType && <p>Has comprado un {ticketType}</p>}
        {qrCodeDataURL && (
          <img src={qrCodeDataURL} alt="QR Code" />
        )}
      </div>
    </div>
  );
};  

export default PagoExitoso;
