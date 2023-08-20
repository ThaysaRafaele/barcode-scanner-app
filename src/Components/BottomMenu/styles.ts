import styled from 'styled-components';

export const BottomMenuContainer = styled.div`
  position: fixed;
  bottom: 16px; 
  left: 50%;
  transform: translateX(-50%); 
  width: 90%; 
  max-width: 400px; 
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  border-radius: 50px;
  border: 1px solid #2C3092;
  padding: 8px; 
`;

export const BottomMenuItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
`;

export const BottomMenuText = styled.span`
  font-size: 12px;
`;

/* Add a media query for responsiveness */
// @media (max-width: 600px) {
//   /* Adjust styles for smaller screens */
//   /* For example, you might want to reduce padding or font size */
// }
