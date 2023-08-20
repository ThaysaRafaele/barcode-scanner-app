import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import BarcodeScanner from '../Components/BarcodeGenerator';
import ProductSearchPage from '../Components/ProductSearchPage';
import Login from '../Pages/Login';

const Routes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/barcodeScanner" element={<BarcodeScanner />} />
        <Route path="/product-search" element={<ProductSearchPage />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;
