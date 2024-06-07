import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { loadStripe } from '@stripe/stripe-js';
import './pago.css';

const MySwal = withReactContent(Swal);
const STRIPE_PUBLIC_KEY = 'pk_test_51P3tpSCExtLBu1XZ5cBhS37icvXqLIIrW9ZdJYLWcumHCd5MGnUmdxXpp8U07z7ODP8GFFqXl1NyRl2pf3eqUFA600hn1IbqP8';
const SUCCESS_URL = 'http://localhost:5173/PagoExitoso';
const CANCEL_URL = 'http://localhost:5173/PagoFallido';

const redirectToCheckout = async (priceId, ticketType) => {
  localStorage.setItem('ticketType', ticketType);  // Guardar el tipo de boleto

  const stripe = await loadStripe(STRIPE_PUBLIC_KEY);

  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      successUrl: SUCCESS_URL,
      cancelUrl: CANCEL_URL,
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

const Ticket = ({ imgSrc, altText, ticketType, price, onClick }) => (
  <div className='ticket'>
    <img className='img-ticket' src={imgSrc} alt={altText} />
    <div className={`tipo-ticket tipo-ticket${ticketType}`}>{ticketType}</div>
    <div className='precio-ticket'>${price}</div>
    <button className='comprar-boleto' onClick={onClick}>Comprar</button>
  </div>
);

export const Pago = () => {
  return (
    <div className='todo'>
      <h1 className='titulo-pago'>Compra tus boletos</h1>
      <div className='cuadro'>
        <Ticket 
          imgSrc='src/assets/images/normal.png' 
          altText='normal pass' 
          ticketType='Normal Pass' 
          price={150} 
          onClick={() => redirectToCheckout('price_1POaoVCExtLBu1XZSzMVBgCK', 'Normal Pass')}
        />
        <Ticket 
          imgSrc='src/assets/images/fast.png' 
          altText='fast pass' 
          ticketType='Fast Pass' 
          price={500} 
          onClick={() => redirectToCheckout('price_1POnPCCExtLBu1XZEhzek2fe', 'Fast Pass')}
        />
        <Ticket 
          imgSrc='src/assets/images/vip.png' 
          altText='vip pass' 
          ticketType='VIP Pass'  
          price={1000} 
          onClick={() => redirectToCheckout('price_1POnPuCExtLBu1XZrDyDpXmn', 'VIP Pass')}
        />
      </div>
    </div>
  ); 
};

export default Pago;
