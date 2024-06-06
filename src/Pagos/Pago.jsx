import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { loadStripe } from '@stripe/stripe-js';
import './pago.css';

const MySwal = withReactContent(Swal);

const handlePagarClick = async () => {
  const stripe = await loadStripe('pk_test_51P3tpSCExtLBu1XZ5cBhS37icvXqLIIrW9ZdJYLWcumHCd5MGnUmdxXpp8U07z7ODP8GFFqXl1NyRl2pf3eqUFA600hn1IbqP8');

  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1POaoVCExtLBu1XZSzMVBgCK', quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:5173/PagoExitoso',
      cancelUrl: 'http://localhost:5173/PagoFallido',
    });

    if (error) {
      console.error('Error al redirigir a la pasarela de pago:', error);
      MySwal.fire({
        title: 'Error',
        text: 'Hubo un problema al redirigir a la pasarela de pago.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  } else {
    console.error('Stripe no se ha cargado correctamente');
    MySwal.fire({
      title: 'Error',
      text: 'No se pudo cargar Stripe. Por favor, inténtelo de nuevo más tarde.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

export const Pago = () => {
  return (
    <div className='todo'>
      <h1 className='titulo-pago'>Compra tus boletos</h1>
      <div className='cuadro'>
        <div className='ticket'>
          
          <img className='img-ticketN' src='src/assets/images/normal.png' alt='normal pass'/>
          <div className='tipo-ticketN'>Normal Pass</div>
          <div className='precio-ticket'>$100</div>
          <button className='comprar-boleto' onClick={handlePagarClick}>Comprar</button>
        </div>

        <div className='ticket'>
          <img className='img-ticketF' src='src/assets/images/fast.png' alt='fastpass'/>
          <div className='tipo-ticketF'>Fast Pass</div>
          <div className='precio-ticket'>$500</div>
          <button className='comprar-boleto' onClick={handlePagarClick}>Comprar</button>
        </div>

        <div className='ticket'>
          <img className='img-ticketV' src='src/assets/images/vip.png' alt='vip pass'/>
          <div className='tipo-ticketV'>VIP Pass</div>
          <div className='precio-ticket'>$1000</div>
          <button className='comprar-boleto' onClick={handlePagarClick}>Comprar</button>
        </div>
      </div>
    </div>  
  ); 
};

export default Pago;
