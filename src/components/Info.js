import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="container">
      <h1 className="custom-text">Información</h1>
      <p>
        <strong>Nombre Completo:</strong> <span className="custom-link">Joaquin Maceira</span>
      </p>
      <p>
        <strong>Edad:</strong> <a href="https://es.wikipedia.org/wiki/17" className="custom-link">17</a>
      </p>
      <p>
        <strong>Ubicación:</strong> <a href="https://www.google.com/maps/place/Buenos+Aires" className="custom-link">Buenos Aires</a>
      </p>
      <p>
        <strong>Correo Electrónico:</strong> <a href="mailto:joaquinmaceira2006@gmail.com" className="custom-link">joaquinmaceira2006@gmail.com</a>
      </p>
      {/* Agrega más información según sea necesario */}
    </div>
  );
};
export default Info;