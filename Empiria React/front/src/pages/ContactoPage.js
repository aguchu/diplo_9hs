import React from "react";
import '../styles/ContactoPage.css';

const ContactoPage = (props) => {

    return (
        <main className="holder">
        <div className="contacto">
          <h2>Contacto</h2>
          <form action="" method="" className="formulario">
            <p>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" required />
            </p>
            <p>
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" name="telefono" />
            </p>
            <p>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea name="mensaje" id="" cols="30" rows="10" required></textarea>
            </p>
            <p class="acciones">
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
        <div className="datos">
          <h2>Otras Vías de Comunicación</h2>
          <ul>
            <li>Teléfono xxxxxxxxx</li>
            <li>Email</li>
            <li>Dirección</li>
          </ul>
          <h3>Redes Sociales</h3>
          <ul className="redes-sociales">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          </ul>
        </div>
      </main>
    );
}

export default ContactoPage;