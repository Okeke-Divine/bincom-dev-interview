import React, { createContext, useState, useEffect } from 'react';

const initialState = {
  items: [],
  supplier: 'FragranceX',
  setSupplier: () => {},
  toggleSupplier: () => {},
};

const APIContext = createContext(initialState);

const APIProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [supplier, setSupplier] = useState(initialState.supplier);

  const toggleSupplier = (data) => {
    setSupplier(data);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://3.88.1.181:8000/products/public/catalog?supplier=${supplier}`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [supplier]); 

  return (
    <APIContext.Provider value={{ items, setItems, supplier, toggleSupplier }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };
