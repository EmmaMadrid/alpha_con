import React, { useEffect, useState } from 'react';

export const PagoExitoso = () => {
  const [ticketType, setTicketType] = useState('');

  useEffect(() => {
    const storedTicketType = localStorage.getItem('ticketType');
    if (storedTicketType) {
      setTicketType(storedTicketType);
      localStorage.removeItem('ticketType');
    }
  }, []);

  return (
    <div className='pago-exitoso'>
      <h1>¡Pago Exitoso!</h1>
      {ticketType && <p>Has comprado un {ticketType}</p>}
    </div>
  );
};  

export default PagoExitoso;
