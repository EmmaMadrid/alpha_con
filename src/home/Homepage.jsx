import React from 'react'
import './homepage.css';
import { Link, } from 'react-router-dom';


export const Homepage = () => {

  return (
    <div className="home-container">
    <div className="home">
      <div className="event_image">
        <img src="src/assets/images/alpalogo.png" alt="alphaLogo" />
      </div>
      <div className="content">
        <h2 className='que-es'
        >¿Qué es ALPHA-CON?</h2>
        <p style={{textAlign: "justify"}}
        >Alpha Con es la convención de anime más grande de San Luis Río Colorado, Sonora. Celebramos el amor por el anime, manga, videojuegos, cosplay y cultura pop. Ofrecemos talleres educativos, conferencias, concursos de cosplay, exhibiciones de artistas y vendedores de mercancía exclusiva. Todos son bienvenidos en nuestra convención inclusiva y diversa. ¡Únete a nuestra comunidad apasionada de fanáticos del anime y la cultura pop en Alpha Con!</p>
        <Link to="/pago" className="btn"
        
        >Comprar boletos</Link>
      </div>
      </div>
      <h1 className='invitados'>INVITADOS | 2024</h1>
      <div className="image-gallery">
        <div className="gallery-item">
          <img src="src/assets/images/invitado1.jpg" alt="Imagen 1" />
        </div>
        <div className="gallery-item">
          <img src="src/assets/images/invitado2.jpg" alt="Imagen 2" />
        </div>
        <div className="gallery-item">
          <img src="src/assets/images/invitado3.jpg" alt="Imagen 3" />
        </div>
        <div className="gallery-item">
          <img src="src/assets/images/invitado4.jpg" alt="Imagen 4" />
        </div>
      </div>

      <div className="stands">
        <img src="src/assets/images/venta-stand.jpg" alt="Convocatoria de Stands" />
        <div className="stand-info">
          <h3>CONVOCATORIA DE STANDS YA ABIERTA‼️</h3>
          <p>Aparta el tuyo con tiempo, que no te ganen tu lugar 🤩! Contaremos con stands de:</p>
          <ul>
            <li>💫 Artista/artesano</li>
            <li>💫 Snacks</li>
            <li>💫 Comercial chico</li>
            <li>💫 Comercial grande</li>
            <li>💫 Comida</li>
          </ul>
        </div>
      </div>

      <div className="event-details">
        <div className="event-details-overlay">
          <div className="event-details-content">
            <h2>FECHA DEL EVENTO</h2>
            <p> 23 NOVIEMBRE 2024 </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Homepage;