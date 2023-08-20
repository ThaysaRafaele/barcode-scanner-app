import React from 'react';
import bananaImage from '../../Assets/banana.png';
import trash from '../../Assets/Trash.png';
import { ProductContainer, ProductInfos, ProductItem, ProductText, ProductTrash } from './styles';

const ProductInfo = ({ product }
  : any) => {

    if (!product) {
      return <div>Loading...</div>; 
    }

  return (
    <ProductContainer>
      <ProductItem>
        <img src={bananaImage} alt="Product" />
      </ProductItem>
      <ProductInfos>
        <ProductText>{product.name}</ProductText>
        <ProductText>{product.price}</ProductText>
      </ProductInfos>
      <ProductTrash>
        <img src={trash} alt="lixeira" />
      </ProductTrash>
    </ProductContainer>
  );
};

export default ProductInfo;
