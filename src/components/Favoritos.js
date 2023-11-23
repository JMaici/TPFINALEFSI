// Favoritos.js
import React from 'react';
import { useFavorites, useData } from '../contextState';
import { Link } from 'react-router-dom';
import './Favoritos.css'; // Import the CSS file

function Favoritos() {
  const { favorites, removeFavorite } = useFavorites();
  const { creacionesData } = useData();

  const handleRemoveFavorite = (creacionId) => {
    // Display a confirmation pop-up before removing from favorites
    const isConfirmed = window.confirm('Estas seguro?');

    if (isConfirmed) {
      removeFavorite(creacionId);
    }
  };

  return (
    <div className="favoritos-container">
      <h1>Favoritos</h1>
      <div className="favoritos-list">
        {favorites.length === 0 ? (
          <p>No hay ningun creacion en favoritos</p>
        ) : (
          favorites.map((creacionId) => {
            const creacion = creacionesData.find((creacion) => creacion.id === creacionId);

            return (
              <div key={creacionId} className="favorito-card">
                {/* Use Link to navigate to detalles page */}
                <Link to={`/detalles/${creacion.id}`}>
                  <img src={creacion.imagenes} alt={creacion.titulo} />
                  <div className="card-content">
                    <h2>{creacion.titulo}</h2>
                    <p>{creacion.descripcion}</p>
                  </div>
                </Link>
                <button onClick={() => handleRemoveFavorite(creacionId)}>Sacar de favoritos</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Favoritos;
