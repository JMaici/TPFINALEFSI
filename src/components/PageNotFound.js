// PageNotFound.js
import React from "react";
import "./PageNotFound.css"; // Import the CSS file

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="message-container">
        <h1 className="title">404</h1>
        <p className="subtitle">Página no encontrada</p>
      </div>
    </div>
  );
};

export default PageNotFound;
