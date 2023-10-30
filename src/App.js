import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favoritos from './components/Favoritos';
import Contacto from './components/Contacto';
import MisCreaciones from './components/MisCreaciones';
import Info from './components/Info';
//import { ProductsProvider } from "./contextState.js";

function App() {
  return (
    //<ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Favorito" element={<Favoritos />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/MisCreaciones" element={<MisCreaciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    //</ProductsProvider>
  );
}

export default App;