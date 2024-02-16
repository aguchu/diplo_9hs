import React from "react";
import { useState } from "react";
import axios from 'axios';
import '../styles/ContactoPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData (oldData=> ({
            ...oldData,
            [name]:value
        }));  
    }

    const handleSubmit= async e => {
        e.preventDefault ();
        setMsg('');
        setSending (true)
        const response = await axios.post ('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg (response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (
        <main className="contacto-container">
            <div className="contacto">
                <h2>Contacto</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" required value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="" cols="30" rows="10" required value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p>: null}
                {msg ? <p>{msg}</p>: null}
            </div>
            <div className="datos">
                <h4>Otras Vías de Comunicación</h4>
                <ul>
                    <li className="contacto-item">
                        <FontAwesomeIcon icon={faPhone} />
                        +54 9 221 557 9211
                    </li>
                    <li className="contacto-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:info@empiriacomunicacion.com.ar">info@empiriacomunicacion.com.ar</a>
                    </li>

                    <li className="contacto-item">
                        <FontAwesomeIcon icon={faMap} />
                        Buenos Aires, Argentina
                    </li>
                </ul>
                <h4>Redes Sociales</h4>
                <ul className="redes-sociales">
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
