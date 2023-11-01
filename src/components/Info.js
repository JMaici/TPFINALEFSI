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
        <strong>Edad:</strong> <span className="custom-link">17</span>
      </p>
      <p>
        <strong>Ubicación:</strong> <a href="https://www.google.com/maps/place/Buenos+Aires" className="custom-link">Buenos Aires</a>
      </p>
      <p>
        <strong>Correo Electrónico:</strong> <a href="mailto:tucorreo@example.com" className="custom-link">example@gmail.com</a>
      </p>
      {/* Agrega más información según sea necesario */}
    </div>
  );
};
export default Info;