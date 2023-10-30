import React from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />  
      <footer>
        <Link to="/Contacto" className="navbar-link">
          Contacto
        </Link>
      </footer>
      
    </>
  );
};

export default Layout;
