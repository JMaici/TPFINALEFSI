import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favoritos from './components/Favoritos';
//import Detalle from './components/Detalle';
//import { ProductsProvider } from "./contextState.js";

function App() {
  return (
    //<ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Favorito" element={<Favoritos />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    //</ProductsProvider>
  );
}

export default App;