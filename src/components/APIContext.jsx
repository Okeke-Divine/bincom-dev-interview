import React, { createContext, useState, useEffect } from 'react';

const APIContext = createContext({
  items: [],
  setItems: () => {},
});

const APIProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX'); // Include the required supplier parameter
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully (e.g., display an error message to the user)
      }
    };

    fetchData();
  }, []);

  return (
    <APIContext.Provider value={{ items, setItems }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };
