import styled from 'styled-components';


export const ProductContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%); 
  width: 90%; 
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  border-radius: 50px;
  border: 1px solid #2C3092;
  padding: 8px;   
  align-items: center;

`;

export const ProductInfos = styled.div`  
  display: flex;    
  justify-content: center;
  flex-direction: column;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;  

  img {
    border-radius: 50px; 
  }
`;

export const ProductTrash = styled.div`
  img {
    
    width: 25px;
    height: 25px;
  }
`;

export const ProductText = styled.span`
  color: #2C3092;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;