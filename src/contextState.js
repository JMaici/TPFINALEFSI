import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

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
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
