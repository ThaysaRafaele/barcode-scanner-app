import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import BarcodeScanner from '../Components/BarcodeGenerator';
import ProductSearchPage from '../Components/ProductSearchPage';

const Routes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<BarcodeScanner />} />
        <Route path="/product-search" element={<ProductSearchPage />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;
