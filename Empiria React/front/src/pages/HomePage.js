import React from "react";
import '../styles/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const HomePage = (props) => {

  return (

    <main className="holder">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= "/IMG/home/slider1.jpg" className="d-block w-100" alt="marketing" />
          </div>
          <div className="carousel-item">
            <img src="/IMG/home/slider2.jpg" className="d-block w-100" alt="socialmedia" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="Servicios">
        <h2>Servicios</h2>
        <p style={{ textAlign: 'justify' }}>Nuestro know how es la comunicación, el marketing y la publicidad aplicada a los emprendedores, pymes y empresas de renombre. Nuestro equipo está altamente cualificado para salir adelante y trabajar en estrategias que aporten valor. </p>
        <p style={{ textAlign: 'justify' }}>Nos convertimos en una parte más de tu compañía, acompañando los procesos diarios de comunicación y marketing para poder alcanzar los objetivos mensuales.</p>
      </div>

      <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testimoniales">
              <div className="perfil">
                <h4>Leandro Padulo</h4>
                <p>Coordinador de Cañoplast</p>
              </div>
              <div className="info-testimonial">
                <i className="fa-solid fa-quote-right"></i>
                <p>"Todo el desarrollo de nuestro ecommerce lo realizamos con los chicos de Empiria. Dedicados, siempre detrás de todos los detalles. Estamos agradecidos con el trabajo que hicieron de refresh de nuestra marca".</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="testimoniales">
              <div className="perfil">
                <h4>Jesica DiLorenzo</h4>
                <p>Psicóloga</p>
              </div>
              <div className="info-testimonial">
                <i className="fa-solid fa-quote-right"></i>
                <p>"Empiria no solo me ayudó con la creación de mi marca personal, sino que también valoro el trabajo que hicieron para posicionarme en España como psicóloga, y así tener infinidad de pacientes nuevos. ¡Gracias a todo el equipo!"</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="testimoniales">
              <div className="perfil">
                <h4>Santiago De Battista</h4>
                <p>Director CIOBE</p>
              </div>
              <div className="info-testimonial">
                <i className="fa-solid fa-quote-right"></i>
                <p>"¡De otro planeta! Los chicos nos ayudan con la parte de Paid Media de la clínica, siendo un caso de éxito total, con un aumento del 300% de turnos en solo mesas. Los quiero siempre en mi equipo". </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="contact-button-container text-center">
  <Link to="/contacto" className="contact-button-link">
    <button className="contact-button">Contacta con nosotros</button>
  </Link>
</div>

    </main>

  );
}

export default HomePage;