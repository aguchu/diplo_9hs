import React from "react";
import '../styles/NosotrosPage.css';
import { Link } from 'react-router-dom';

const agustinaImage = process.env.PUBLIC_URL + '/IMG/nosotros/agustina.png';
const MariaImage = process.env.PUBLIC_URL + '/IMG/nosotros/maria.png';
const NataliaImage = process.env.PUBLIC_URL + '/IMG/nosotros/natalia.png';

const agustinaLinkedIn = 'https://www.linkedin.com/in/chiaravalliagustina/';
const mariaLinkedIn = 'https://www.linkedin.com/in/marice-blanco-b9796515/';

const NosotrosPage = (props) => {

  return (
    <main className="holder">
      <div className="nosotros">
        <div className="holder">
          <h2>Nosotros</h2>
          <p>Somos Empiria Comunicación Digital, una agencia de comunicación integral
            que se dedica a brindar soluciones creativas y efectivas en el ámbito digital. Con años de
            experiencia y un equipo de profesionales altamente calificados, estamos aquí para ayudarte a
            alcanzar tus metas en línea y destacar en el mundo digital.</p>
          <p>Nuestro compromiso es ofrecer servicios de calidad que abarcan desde el
            diseño web y el marketing digital hasta la gestión de redes sociales. Trabajamos de cerca con
            nuestros clientes para entender sus necesidades y proporcionar soluciones personalizadas que generen
            resultados positivos.</p>
          <p>En Empiria, creemos en la excelencia, la innovación y la creatividad.
            Estamos comprometidos en impulsar tu éxito en línea y ser tu socio confiable en la era digital. Si
            estás listo para llevar tu presencia en línea al siguiente nivel, ¡contáctanos hoy y descubre cómo
            podemos ayudarte a alcanzar tus objetivos!</p>
        </div>
      </div>
      <div className="contact-button-container">
        <Link to="/contacto">
          <button className="contact-button">Contacta con nosotros</button>
        </Link>
      </div>
      <div className="equipo">
        <h2>Equipo</h2>
      </div>

      <div className="equipo-personas">
        <div className="columnas">
          <div className="persona">
            <img src={agustinaImage} alt="Agustina Chiaravalli" />
            <a href={agustinaLinkedIn} target="_blank" rel="noopener noreferrer">
              <h5>Agustina Chiaravalli</h5>
            </a>
            <h6>CEO & Marketing Manager</h6>
          </div>
          <div className="persona">
            <img src={MariaImage} alt="Maria Cecilia Blanco" />
            <a href={mariaLinkedIn} target="_blank" rel="noopener noreferrer">
              <h5>María Cecilia Blanco</h5> 
              </a>
            <h6>Directora de Arte y Diseño</h6>
          </div>
          <div className="persona">
            <img src={NataliaImage} alt="Natalia Jordan" />
            <h5>Natalia Jordan</h5>
            <h6>Directora Visual y de Fotografía</h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NosotrosPage;