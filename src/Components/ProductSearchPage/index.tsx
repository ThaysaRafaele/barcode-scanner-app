import React, { useState } from 'react';
import Header from '../Header';
import BottomMenu from '../BottomMenu';
import { ProductSearchContainer, SearchInput, SearchButton } from './styles';

const ProductSearchPage = () => {
  const [barcode, setBarcode] = useState('');

  const handleSearch = () => {
    // Lógica para realizar a busca do produto usando o código de barras (barcode)
    // Você pode navegar para outra página ou executar outras ações aqui
  };

  return (
    <>
      <Header />
      <ProductSearchContainer>
        <SearchInput
          type="text"
          placeholder="Digite o Código de Barras do Produto"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Buscar Produto</SearchButton>
      </ProductSearchContainer>
      <BottomMenu />
    </>
  );
};

export default ProductSearchPage;
