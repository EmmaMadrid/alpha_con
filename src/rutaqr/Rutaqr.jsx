// Rutaqr.jsx
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



export function Rutaqr() {
  let { folio } = useParams();
  const [data, setData] = useState({});
  const [boleto, setBoleto] = useState({});
  useEffect(() => {
    const fetchBoleto = async () => {
      try {
        const response = await axios.get(`https://alpha-con-default-rtdb.firebaseio.com/boletos/${folio}.json`);
        setBoleto(response.data);
        console.log(folio)
        console.log(response.data)
      } catch (err) {
        console.error("Error fetching boleto", err);
      }
    };
  
    fetchBoleto();
  }, [folio]);

  return (
    <div className="rutaqr-container">
      <h2 className="rutaqr-title">FOLIO DEL BOLETO: {folio}</h2>
      <h2>FECHA: {boleto.fecha}</h2>
      <h2>HORA: {boleto.hora}</h2>
      <h2>NOMBRE: {boleto.nombre}</h2>
      <h2>TIPO DE BOLETO: {boleto.tipoBoleto}</h2>
      <h2>ESTADO: {boleto.estado}</h2>
      <button>PERFORAR</button>
    </div>
  );
}