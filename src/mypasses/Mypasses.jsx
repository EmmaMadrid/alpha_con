import React, { useState, useEffect } from 'react';
import './mypasses.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOut } from '../firebaseConfig/firebase'; 


export const Mypasses = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const uid = user.uid;
    

  
    useEffect(() => {
      axios.get(`https://alpha-con-default-rtdb.firebaseio.com/boletos/${uid}.json`)
          .then((response) => {
              setData(response.data);
              console.log(response.data)
          })
          .catch((error) => { 
              console.error("Error al obtener los datos",error)
          })
          .finally(() => {
              setLoading(false);
          });
    }, []);  
  return (
    <div className="row">
    {Object.keys(data).map((key) => (
        <div className="col-12 col-md-4" key={key}>
                CANTIDAD DE ENTRADAS={data[key].cantidad_entradas}
                NOMBRE DEL DUEÑO={data[key].nombre_comprador}
                TIPO DE BOLETO(S)={data[key].tipo_boleto}
                ESTADO DEL BOLETO={data[key].estado}
        </div>
    ))}
</div>  )
};

export default Mypasses;