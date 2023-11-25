// contextState.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();
const FavoritesContext = createContext();
const DarkModeContext = createContext(); // Add Dark Mode context

export const DataProvider = ({ children }) => {
  const [creacionesData, setCreacionesData] = useState(null);

  useEffect(() => {
    axios.get('creaciones.json')
      .then(res => {
        setCreacionesData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <DataContext.Provider value={{ creacionesData }}>
      <FavoritesProvider>
        <DarkModeProvider>{/* Include Dark Mode provider */}
          {children}
        </DarkModeProvider>
      </FavoritesProvider>
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (creacionId) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(creacionId)) {
        return [...prevFavorites, creacionId];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (creacionId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== creacionId));
  };

  const isFavorite = (creacionId) => favorites.includes(creacionId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
