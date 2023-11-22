// Detalles.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../contextState';
import './Detalles.css'; // Import the new CSS file

function Detalles() {
  const { id } = useParams();
  const { creacionesData } = useData();
  const [creacion, setCreacion] = useState(null);

  useEffect(() => {
    if (creacionesData) {
      const foundCreacion = creacionesData.find((creacion) => creacion.id == id);
      if (foundCreacion !== creacion) {
        setCreacion(foundCreacion || null);
      }
    }
  }, [creacionesData, id, creacion]);

  if (!creacion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detalles-container">
      <h2>{creacion.titulo}</h2>
      <p className="description">{creacion.descripcion}</p>
      <p className="date">{creacion.fecha}</p>
      <div className="image-container">
        <img className="creacion-image" src={creacion.imagenes} alt={creacion.titulo} />
      </div>
      {/* Add more details as needed */}
    </div>
  );
}

export default Detalles;
