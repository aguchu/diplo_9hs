import React from "react";
import '../styles/NosotrosPage.css';

const NosotrosPage= (props)=> {

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
  
        <div className="equipo">
          <h2>Equipo</h2>
        </div>
  
        <div className="equipo-personas">
          <div className="columnas">
            <div className="persona">
                            <h5>Agustina Chiaravalli</h5>
              <h6>CEO</h6>
            </div>
            <div className="persona">
                            <h5>Nombre de la Persona 2</h5>
              <h6>Puesto de la Persona 2</h6>
            </div>
            <div className="persona">
            <h5>Nombre de la Persona 3</h5>
              <h6>Puesto de la Persona 3</h6>
            </div>
          </div>
        </div>
      </main>
    );
    }
    
    export default NosotrosPage;