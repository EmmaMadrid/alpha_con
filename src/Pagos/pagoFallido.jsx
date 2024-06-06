import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export const PagoFallido = () => {

  return (
    <div>
      <h1>¡Pago fallido!</h1>
      <p>Por alguna razon esta madre no funciono.</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  );
};

export default PagoFallido;
