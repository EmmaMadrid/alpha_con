import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export const PagoExitoso = () => {

    


  return (
    <div>
      <h1>¡Pago exitoso!</h1>
      <p>¡Gracias por tu pago!.</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  );
};

export default PagoExitoso;
