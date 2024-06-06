import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { loadStripe } from '@stripe/stripe-js';

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
    <div>
      <br />
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div className='card mt-4'>
            <img src="https://example.com/imagen.jpg" className='card-img-top' alt='Boleto' />
            <div className='card-body'>
              <h5 className='card-title'>Boleto</h5>
              <p className='card-text'>Descripción del boleto.</p>
              <p className='card-text'>Precio: $150</p>
              <button className='btn btn-primary' onClick={handlePagarClick}>Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pago;
