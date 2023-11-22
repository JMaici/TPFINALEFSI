// contextState.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();
const FavoritesContext = createContext();

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
        {children}
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
    setFavorites((prevFavorites) => [...prevFavorites, creacionId]);
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
