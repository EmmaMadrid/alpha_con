import React, { useState, useEffect } from 'react';
import './mypasses.css';
import axios from 'axios';
import QRCode from 'qrcode';

export const Mypasses = () => {
  const [data, setData] = useState(null);
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const generarCodigoQR = async (key) => {
    try {
      const url = `http://localhost:5173/${key}`;
      const qrCodeDataURL = await QRCode.toDataURL(url);
      return qrCodeDataURL;
    } catch (error) {
      console.error("Error al generar el código QR", error);
      return null;
    }
  };

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://alpha-con-default-rtdb.firebaseio.com/boletos.json`);
      const boletos = response.data;

    // Buscar el boleto con el idBoleto especificado
    let boletoKey = null;
    const boleto = Object.entries(boletos).find(([key, boleto]) => {
      if (boleto.idBoleto === searchTerm) {
        boletoKey = key;
        return true;
      }
      return false;
    })[1];
  
      if (boleto) {
        setData(boleto);
  
        const qrCodeDataURL = await generarCodigoQR(boletoKey);
        setQrCode(qrCodeDataURL);
      } else {
        console.error("No se encontró ningún boleto con ese idBoleto");
        setData(null);
        setQrCode('');
      }
    } catch (error) {
      console.error("Error al obtener los datos", error);
      setData(null);
      setQrCode('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      handleSearchClick();
    } else {
      setData(null);
      setQrCode('');
    }
  }, [searchTerm]);



  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="homeb-page">
      <div className="home1">
        <div className="homeb-box">
          <div className="input-container">
            <input
              className='fol'
              type="text"
              placeholder="Buscar por folio o ID"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="search-button" onClick={handleSearchClick} disabled={!searchTerm.trim()}>
              <strong>Buscar</strong>
            </button>
          </div>
          {loading && <p>Cargando...</p>}
          {data && (
            <div>
              {Object.entries(data).map(([key, value]) => (
                <p key={key}>{`${key}: ${value}`}</p>
              ))}
              {qrCode && (
                <img
                  src={qrCode}
                  alt={`QR Code for ${searchTerm}`}
                />
              )}
            </div>
          )}
          {!loading && !data && searchTerm && <p>No se encontró ningún boleto con el folio</p>}
        </div>
      </div>
    </div>
  );
};

export default Mypasses;
