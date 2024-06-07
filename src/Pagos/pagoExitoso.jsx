import React, { useEffect, useState } from 'react';
import './pagoExitoso.css';
import axios from 'axios'

export const PagoExitoso = () => {
  const [ticketType, setTicketType] = useState(null);

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
        })
        .catch(error => {
          console.error('Error al agregar boleto:', error);
        });
    }

  }, []);

  return (
    <div className='pago-exitoso'>
      <div className="boxxx">
        <h1>¡Pago Exitoso!</h1>
        {ticketType && <p>Has comprado un {ticketType}</p>}

      </div>
    </div>
  );
};  

export default PagoExitoso;
