import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Badge from "@mui/material/Badge";
import StarIcon from "@mui/icons-material/Star";

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Info" className="navbar-link">
              Info
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/MisCreaciones" className="navbar-link">
              Mis Creaciones
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Favoritos" className="navbar-link">
              Favoritos
              <Badge badgeContent={4} color="error">
                <StarIcon />
              </Badge>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
      <footer className="footer">
        <Link to="/Contacto" className="navbar-link">
          Contacto
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
