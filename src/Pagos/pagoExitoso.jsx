import React, { useEffect, useState } from 'react';
import './pagoExitoso.css';
import axios from 'axios';
import QRCode from 'qrcode';

export const PagoExitoso = () => {
  const [ticketType, setTicketType] = useState(null);
  const [qrCodeDataURL, setQrCodeDataURL] = useState(null);
  const [folio, setFolio] = useState(null); // Estado para almacenar el folio del boleto

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
        const key = response.data.name;
        setFolio(key); // Establece el folio del boleto en el estado
        return key; // Retorna el folio para poder usarlo en la siguiente cadena .then
      })
      .then(generarCodigoQR) // Llama a generarCodigoQR después de obtener el folio
      .then(setQrCodeDataURL) // Establece el código QR una vez generado
      .catch(error => {
        console.error('Error al agregar boleto:', error);
      });
    }
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
        {folio && <p className='most-folio'>Folio del boleto: <br></br></p>}
        <p className='folioQR'>{folio}</p>
        {qrCodeDataURL && (
          <img src={qrCodeDataURL} alt="QR Code" />
        )}
      </div>
    </div>
  );
};  

export default PagoExitoso;
