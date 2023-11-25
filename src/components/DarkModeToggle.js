// DarkModeToggle.js
import React, { useContext } from 'react';
import { DarkModeContext } from '../contextState';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeToggle">Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;
