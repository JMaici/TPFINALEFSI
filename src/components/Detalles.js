// Detalles.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData, useFavorites } from '../contextState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Detalles.css';

function Detalles() {
  const { id } = useParams();
  const { creacionesData } = useData();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
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

  const handleAddFavorite = () => {
    addFavorite(creacion.id);
  };

  const handleRemoveFavorite = () => {
    removeFavorite(creacion.id);
  };

  return (
    <div className="detalles-container">
      <h2>{creacion.titulo}</h2>
      <p className="description">{creacion.descripcion}</p>
      <p className="date">{creacion.fecha}</p>
      <div className="image-container">
        <img className="creacion-image" src={creacion.imagenes} alt={creacion.titulo} />
      </div>
      {/* Styled and animated button to add/remove from favorites */}
      {isFavorite(creacion.id) ? (
        <button className="remove-favorite" onClick={handleRemoveFavorite}>
          Sacar de favoritos
        </button>
      ) : (
        <button className="add-favorite" onClick={handleAddFavorite}>
          Agregar a favoritos
        </button> 
      )}
      {/* GitHub button */}
      <a href={creacion.githubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
      </a>
      {/* Add more details as needed */}
    </div>
  );
}

export default Detalles;
