import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="container">
      <h1 className="custom-text">Información</h1>
      <p>
        <strong>Nombre Completo:</strong> <span className="custom-link">Tu Nombre</span>
      </p>
      <p>
        <strong>Edad:</strong> <span className="custom-link">Tu Edad</span>
      </p>
      <p>
        <strong>Ubicación:</strong> <span className="custom-link">Tu Ubicación</span>
      </p>
      <p>
        <strong>Correo Electrónico:</strong> <a href="mailto:tucorreo@example.com" className="custom-link">Tu Correo Electrónico</a>
      </p>
      {/* Agrega más información según sea necesario */}
    </div>
  );
};

export default Info;
 