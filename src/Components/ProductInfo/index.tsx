import React from 'react';

const ProductInfo = ({ product }
  : any) => {
  return (
    <div>
      <h2>Product Information</h2>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p>
    </div>
  );
};

export default ProductInfo;
