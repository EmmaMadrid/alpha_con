import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './rutaqr.css'


export function Rutaqr() {
  let { folio } = useParams();
  const [data, setData] = useState({});
  const [boleto, setBoleto] = useState({});
  useEffect(() => {
    const fetchBoleto = async () => {
      try {
        const response = await axios.get(`https://alpha-con-default-rtdb.firebaseio.com/boletos/${folio}.json`);
        setBoleto(response.data);
        console.log(boleto)
        console.log(folio)
        console.log(response.data)
      } catch (err) {
        console.error("Error fetching boleto", err);
      }
    };
  
    fetchBoleto();
  }, [folio]);

  const desactivarBoleto = async () => {
    try{
    await axios.patch(`https://alpha-con-default-rtdb.firebaseio.com/boletos/${folio}.json`, {
      estado: "INACTIVO"
    });
    alert("EL BOLETO FUE DESACTIVADO EXITOSAMENTE")
    window.location.reload();
  } catch (err) {
    console.error("Error desactivando boleto", err);
  }
  }
  

  return (
    <div className="container">
      <h2 className='folio'>FOLIO DEL BOLETO: </h2>
      <h3>{folio}</h3>

      <h2>FECHA: </h2>
      <h3>{boleto.fechaEvento}</h3>

      <h2>HORA: {boleto.hora}</h2>
      <h3>{boleto.horaEvento}</h3>

      <h2>TIPO DE BOLETO: </h2>
      <h3>{boleto.tipoBoleto}</h3>
      
      <h2>ESTADO: </h2>
      <h3 className={boleto.estado === "ACTIVO" ? 'estado-activo' : 'estado-desactivado'}>{boleto.estado}</h3>

      {boleto.estado === "ACTIVO" && <button onClick={desactivarBoleto}>PERFORAR</button>}
      </div>
  );
}