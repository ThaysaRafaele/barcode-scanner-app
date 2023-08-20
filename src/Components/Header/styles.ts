import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: auto;
  height: 114px;
  background: #2C3092;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;  
  position: absolute;
  z-index: 5;
  top: calc(100% - 40px);
  border: 1px solid #2C3092;
`;

export const Logo = styled.img`
  width: 58px;
  height: 27px;
  flex-shrink: 0;
`;