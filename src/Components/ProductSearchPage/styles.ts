import styled from 'styled-components';

export const ProductSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: auto;
  height: 480px; 
`;

export const SearchInput = styled.input`
    padding: 10px;
    margin-top: 55px;
    border: none; 
    border-bottom: 1px solid #2C3092; 
    font-size: 16px;
    width: 296px;

  &::placeholder {
    color: #2C3092;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
  }

  &:focus {
    border: 2px solid #2C3092; 
    outline: none; 
    border-radius: 5px;
  }
`;

export const SearchButton = styled.button`
  width: 320px;
  margin-top: 32px;
  height: 48.02px;
  border-radius: 50px;
  border: 1px solid #2C3092;
  background-color: transparent;
  color: #2C3092;
  font-family: 'Inter', sans-serif;;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    border: 2px solid white; 
    color: white;
    background-color: #2C3092;
  }
`;
