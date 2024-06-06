import React, { useState, useEffect } from 'react';
import './mypasses.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOut } from '../firebaseConfig/firebase'; 
import QRCode from 'qrcode';

export const Mypasses = () => {
    const [data, setData] = useState({});
    const [qrCodes, setQrCodes] = useState({});
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const uid = user?.uid;


    useEffect(() => {
        const fetchData = async () => {
            
            
            try {
                const response = await axios.get(`https://alpha-con-default-rtdb.firebaseio.com/boletos.json`);
                const data = response.data;
                setData(data);
                console.log(data)
                // Generate QR codes for each ticket
                const newQrCodes = {};
                for (const key of Object.keys(data)) {
                    const boleto = data[key];
                    const qrCodeDataURL = await generarCodigoQR(
                        key,
                        boleto.fecha,
                        boleto.hora,
                        boleto.nombre,
                        boleto.tipoBoleto
                    );
                    newQrCodes[key] = qrCodeDataURL;
                }
                setQrCodes(newQrCodes);
            } catch (error) {
                console.error("Error al obtener los datos", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uid]);

    // Función para generar el código QR
    const generarCodigoQR = async (key) => {
        const textoQR = `localhost:5173/boleto/${key}`;
        try {
            const qrCodeDataURL = await QRCode.toDataURL(textoQR);
            return qrCodeDataURL;
        } catch (err) {
            console.error("Error generando el código QR", err);
            return null;
        }
    };

    return (
        <div className="row">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                Object.keys(data).map((key) => {
                    const boleto = data[key];
                    return (
                        <div className="col-12 col-md-4" key={key}>
                            <div>
                                <p>Folio: {key}</p>
                                <p>Cantidad de Entradas: {boleto.cantidad_entradas}</p>
                                <p>Nombre del Dueño: {boleto.nombre}</p>
                                <p>Tipo de Boleto(s): {boleto.tipoBoleto}</p>
                                <p>Estado del Boleto: {boleto.estado}</p>
                                {qrCodes[key] && (
                                    <img src={qrCodes[key]} alt={`QR Code for ${key}`} />
                                )}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Mypasses;
