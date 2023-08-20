import React, { useState } from 'react';
import './App.css';
import BarcodeScanner from './Components/BarcodeGenerator';
import ProductInfo from './Components/ProductInfo';
import Login from './Pages/Login';
import axios from 'axios';


const App = () => {
  const [product, setProduct] = useState<{ name: string; price: string } | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleBarcodeDetected = async (barcode: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/7897312400184`);
      const productData = response.data;
  
      setProduct(productData);
    } catch (error) {
      console.error('Erro ao buscar informações do produto:', error);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <BarcodeScanner />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {product && <ProductInfo product={product} />}
    </div>
  );
};

export default App;
