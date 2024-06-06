import React from 'react'
import './contactpage.css';
import { Link } from 'react-router-dom';

export const Contactpage = () => {
  return (
    <div className="home1">
    <div className="homeb-box">
        <h2>Contactanos</h2>
        <div className="logo-container">
          <Link to="https://www.instagram.com/alphacon.sanluis" target="_blank">
            <img src="src/assets/images/insta-logo.webp" alt="" className='logo-insta'/>
          </Link>
          <Link to="https://www.facebook.com/Alphaconslrc" target="_blank">
            <img src="src/assets/images/face-logo.png" alt="" className='logo-face'/>
          </Link>
        </div>
        <h3>Correo</h3>
        <a href="mailto:contacto@alphacon.com.mx">contacto@alphacon.com.mx !</a>
      </div>
    </div> 
  );
};

export default Contactpage;