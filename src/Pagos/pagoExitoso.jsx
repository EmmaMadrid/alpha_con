import React, { useEffect, useState } from 'react';
import './pagoExitoso.css';
import axios from 'axios'

export const PagoExitoso = () => {
  const [ticketType, setTicketType] = useState('');

  useEffect(() => {
    const storedTicketType = localStorage.getItem('ticketType');
    if (storedTicketType) {
      setTicketType(storedTicketType);
      localStorage.removeItem('ticketType');
    }
  }, []);

  const boleto = {
    estado: "ACTIVO",
    fecha: "hoy", // Fecha actual
    hora: "5 pm",
    nombre: "Ricardo",
    tipoBoleto: ticketType,
  };
  
  axios.post('https://alpha-con-default-rtdb.firebaseio.com/boletos.json', boleto)
    .then(response => {
      console.log('Boleto agregado correctamente');
    })
    .catch(error => {
      console.error('Error al agregar boleto:', error);
    });
  

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
