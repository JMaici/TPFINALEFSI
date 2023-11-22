// MisCreaciones.js
import React from 'react';
import { useData } from '../contextState';
import { Link } from 'react-router-dom';
import './MisCreaciones.css'; // Import the new CSS file

function MisCreaciones() {
  const { creacionesData } = useData();

  // Check if the data has been loaded
  if (!creacionesData) {
    return <div>Loading...</div>; // You might want to add a loading indicator
  }

  return (
    <div className="mis-creaciones-container">
      <h1>Mis Creaciones</h1>
      <div className="creaciones-container">
        {creacionesData.map((creacion) => (
          <div key={creacion.id} className="creacion-card">
            {/* Use Link from React Router to navigate to detalles page */}
            <Link to={`/detalles/${creacion.id}`}>
              {/* Render card with title, description, and image */}
              <img src={creacion.imagenes} alt={creacion.titulo} />
              <div className="card-content">
                <h2>{creacion.titulo}</h2>
                <p>{creacion.descripcion}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisCreaciones;
