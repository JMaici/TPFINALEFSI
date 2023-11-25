// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useFavorites, useDarkMode } from '../contextState'; // Import useDarkMode hook
import "./globalStyles.css"; // Import global styles
import "./Layout.css";
import Badge from "@mui/material/Badge";
import StarIcon from "@mui/icons-material/Star";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import the dark mode icon

const Layout = () => {
  const { favorites } = useFavorites();
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use the dark mode state and toggle function

  return (
    <div className={`layout ${darkMode ? 'dark-mode' : ''}`}>
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
              <Badge badgeContent={favorites.length} color="success">
                <StarIcon />
              </Badge>
            </Link>
          </li>
          {/* Dark Mode toggle button */}
          <li className="navbar-item dark-mode-toggle" onClick={toggleDarkMode}>
            <Brightness4Icon />
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
        {/* LinkedIn Button */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedInIcon />
        </a>
        {/* Instagram Button */}
        <a href="https://www.instagram.com/_maceira" target="_blank" rel="noopener noreferrer" className="social-icon">
          <InstagramIcon />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
