import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './pagoFallido.css';

export const PagoFallido = () => {

  return (
    <div className='pago-fallido-container'>
      <h1>¡Pago fallido!</h1>
      <img src="alpha_con/src/assets/images/rechazado.png" alt="" />
      <p>Por alguna razon esta madre no funciono.</p>
      <Link to='/Pago'>Atras</Link>
    </div>
  );
};

export default PagoFallido;
