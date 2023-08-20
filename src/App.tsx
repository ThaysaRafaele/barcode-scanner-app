import React, { useState } from 'react';
import './App.css';
import BarcodeScanner from './Components/BarcodeGenerator';
import ProductInfo from './Components/ProductInfo';
import Login from './Pages/Login';


const App = () => {
  const [product, setProduct] = useState<{ name: string; price: string } | null>(null);

  const handleBarcodeDetected = (barcode: string) => {
    const mockProduct = {
      name: 'Sample Product',
      price: '$9.99',
    };
    setProduct(mockProduct);
  };

  return (
    <div className="App">
      {/* <Login/> */}
      <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} />
      {product && <ProductInfo product={product} />}
    </div>
  );
};

export default App;
