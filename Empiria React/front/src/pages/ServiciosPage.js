import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faUsers, faPalette, faGlobe } from "@fortawesome/free-solid-svg-icons";
import '../styles/ServiciosPage.css';
import { Link } from 'react-router-dom';

const ServiciosPage = (props) => {

    const servicios = [
        { icono: faBullhorn, titulo: "Marketing Digital", descripcion: "Contamos con un equipo especializado en Paid Media, Paid Social y Data Analysis para convertir las ventas en el medio del funnel, y aumentar la fidelidad de los clientes al finalizar el proceso. " },
        { icono: faUsers, titulo: "Redes Sociales", descripcion: "Trabajamos las acciones dentro del mapa completo del Customer Journey, en base a cada marca y objetivo. Estrategia y gestión diaria de Redes Sociales. Te ayudamos a llegar a tu audiencia." },
        { icono: faPalette, titulo: "Diseño Gráfico", descripcion: "Mostrar una imagen atractiva permite que tu negocio se diferencie de la competencia, atrayendo nuevos clientes y fidelizando a los actuales. Tenemos un equipo multidisciplinar que trabaja planes de identidad corporativa, diseño gráfico, packaging, editorial, web, ilustración, diseño multimedia y fotografía." },
        { icono: faGlobe, titulo: "Páginas Web", descripcion: "Diseñamos y ayudamos a mantener sitios webs convencionales, autoadministrables, ecommerce y más. Garantizamos el posicionamos SEO, la compatibilidad con buscadores responsive y la optimización en distintos dispositivos. También realizamos Microsites, Landing Pages y APPs." },
    ];

    return (
        <div className="servicios-container">
            <h2>Servicios</h2>
            <ul>
                {servicios.map((servicio, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={servicio.icono} className="icono" />
                        <div>
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/contacto">
                <button className="contact-button">Contacta con nosotros</button>
            </Link>
        </div>
    );
}

export default ServiciosPage;