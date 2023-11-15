import React, { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../contextState.js";
const Home = () => {
  const { creacionesData } = useData();
  console.log(creacionesData);

  if (!creacionesData) {
    return <div>Loading...</div>;
  }
  const destacadoCreaciones = creacionesData.filter(
    (creacion) => creacion.destacado
  );
  return (
    <>
      <h1>Hola</h1>
      {destacadoCreaciones &&
        destacadoCreaciones.map((creacion, index) => <p>{creacion.titulo}</p>)}
    </>
  );
};

export default Home;
