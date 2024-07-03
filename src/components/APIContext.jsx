// apicontext.jsx
import React, { createContext, useState, useEffect } from 'react';

const initialState = {
  items: [],
  supplier: 'FragranceNet', // Initial supplier
  search: '', // Initial search term
  setSupplier: () => {},
  setSearch: () => {},
  toggleSupplier: () => {},
};

const APIContext = createContext(initialState);

const APIProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [supplier, setSupplier] = useState(initialState.supplier);
  const [search, setSearch] = useState(initialState.search);

  const toggleSupplier = (data) => {
    setSupplier(data);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://3.88.1.181:8000/products/public/catalog?supplier=${supplier}&search=${search}`);
      const data = await response.json();
      if(response.status === 200){
        setItems(data)
      }
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    fetchData();
  }, [supplier, search]); // Re-fetch data on supplier or search change

  return (
    <APIContext.Provider value={{ items, setItems, supplier, search, setSearch, toggleSupplier }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };