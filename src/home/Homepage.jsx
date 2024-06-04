import React from 'react'
import './homepage.css';
import { Link, Route } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="home">
      
      <div className="event_image">
        <img src="https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/432548664_7184552501640831_3270618544034882823_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFn7N2nZ90eUHO1HeP-jmqBJXfuwsq5fbkld-7Cyrl9uQTJup2MwjlJRLvc66NcsDAZ8uoZCM0iI0ncb2UU8KxY&_nc_ohc=v-UDNS02EhMQ7kNvgGuUsOe&_nc_ht=scontent.fmxl1-1.fna&oh=00_AYDjXssJXhpA0GIEW6Tu5iBaEHzq-CcbGn8NYggI4AvLKw&oe=66609DD4" alt="" />
      </div>
      <div className="content">
        <img className='titulo' src=".\src\assets\images\alpha.png" alt="" />
        <p>Alpha Con es la convención de anime más grande de San Luis Río Colorado, Sonora. Celebramos el amor por el anime, manga, videojuegos, cosplay y cultura pop. Ofrecemos talleres educativos, conferencias, concursos de cosplay, exhibiciones de artistas y vendedores de mercancía exclusiva. Todos son bienvenidos en nuestra convención inclusiva y diversa. ¡Únete a nuestra comunidad apasionada de fanáticos del anime y la cultura pop en Alpha Con!</p>
        <Link to="/pago" className="btn">Comprar boletos</Link>
      </div>
      
    </div>
    
  );
};

export default Homepage;