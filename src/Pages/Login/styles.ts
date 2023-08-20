import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border: none; 
    border-bottom: 1px solid #2C3092; 
    font-size: 16px;
    width: 100%;

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

export const ForgotPasswordLink = styled.a`
  color: #2C3092;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-align: right;
  margin-top: 10px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  background-color: #2C3092;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  width: 320px;
  height: 55px;
  border-radius: 50px;
`;
