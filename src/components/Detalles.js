// Detalles.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../contextState';

function Detalles() {
  const { id } = useParams();
  const { creacionesData } = useData();
  const [creacion, setCreacion] = useState(null);

  useEffect(() => {
    console.log('Inside useEffect - id:', id);
    console.log('creacionesData inside useEffect:', creacionesData);
  
    if (creacionesData) {
      const foundCreacion = creacionesData.find((creacion) => creacion.id == id);
      console.log('foundCreacion:', foundCreacion);
  
      if (foundCreacion !== creacion) {
        setCreacion(foundCreacion || null);
      } 
    }
  }, [creacionesData, id, creacion]);
  
  

  console.log('id:', id);
  console.log('creacionesData:', creacionesData);
  console.log('creacion:', creacion);

  if (!creacion) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <h2>{creacion.titulo}</h2>
      <p>{creacion.descripcion}</p>
      <img src={creacion.imagenes} alt={creacion.titulo} />
      {/* Add more details as needed */}
    </div>
  );
}

export default Detalles;
