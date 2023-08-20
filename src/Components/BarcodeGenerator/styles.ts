import styled from 'styled-components';

export const BarcodeScannerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 360px; 
  height: 480px; 
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const EnterBarcodeButton = styled.button`
  position: fixed;
  bottom: 20%;
  width: 320px;
  height: 48.02px;
  border-radius: 50px;
  border: 1px solid #2C3092;
  background-color: transparent;
  color: #2C3092;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  z-index: 10;
  cursor: pointer;

  &:hover {
    border: 2px solid white; 
    color: white;
    background-color: #2C3092;
  }
`;