import styled from 'styled-components';

export const BarcodeScannerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 360px; /* Define o tamanho máximo do scanner */
  height: 480px; /* Altura fixa para o scanner */
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;