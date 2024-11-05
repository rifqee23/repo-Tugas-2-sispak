import React, { createContext, useContext, useState } from "react";

const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop ASUS",
      category: "Electronics",
      price: 7500000,
      stock: 25,
      supplier: "PT. Teknologi Nusantara",
    },
    {
      id: 2,
      name: "Laptop Lenovo",
      category: "Electronics",
      price: 7500000,
      stock: 25,
      supplier: "PT. Teknologi Nusantara",
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <productContext.Provider value={{ products, addProduct }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => useContext(productContext);
