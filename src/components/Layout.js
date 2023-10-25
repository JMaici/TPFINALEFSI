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
      <footer>
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </footer>
      <Outlet />
    </>
  );
};

export default Layout;
