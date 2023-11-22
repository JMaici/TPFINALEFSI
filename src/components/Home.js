import "./Home.css";
import React from 'react';
import { useData } from '../contextState'; // Assuming useData is exported from your context
import { Link } from 'react-router-dom';

function Home() {
  const { creacionesData } = useData();

  // Check if the data has been loaded
  if (!creacionesData) {
    return <div>Loading...</div>; // You might want to add a loading indicator
  }

  return (
    <div>
      <h1>Creaciones Destacadas</h1>
      <div className="creaciones-container">
        {creacionesData.map((creacion) => {
          if (creacion.destacado) {
            return (
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
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Home;
