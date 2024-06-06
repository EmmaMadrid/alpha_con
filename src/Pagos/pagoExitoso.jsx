import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './pagoExitoso.css'

export const PagoExitoso = () => {
  //Generando un nuevo boleto cada vez que se compre
  try{
    axios.post(`https://alpha-con-default-rtdb.firebaseio.com/boletos.json`, {
      "BoletoMarlon": "BoletoMarlon"
    });
    alert("EL BOLETO FUE CREADO EXITOSAMENTE")
  } catch (err) {
    console.error("Error creando el boleto", err);
  }

  return (
    <div className='boxxx'>
      <h1>¡Pago exitoso!</h1>
      <p>¡Gracias por tu pago!.</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  );
};

export default PagoExitoso;
