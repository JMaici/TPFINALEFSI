import React from "react";
import "./Contacto.css"; // Import the CSS file

const Contacto = () => {
  return (     
    <>
      <div className="contact-form">
        <form>
          <label className="contact-label" htmlFor="fname">
            Nombre: <input className="contact-input" type="text" id="fname" name="fname" />
          </label>
          <br />
          <label className="contact-label" htmlFor="lname">
            Apellido: <input className="contact-input" type="text" id="lname" name="lname" />
          </label>
          <br />
          <input className="contact-submit" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Contacto;
