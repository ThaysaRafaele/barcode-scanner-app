import { useState } from 'react';
import {
  LoginContainer,
  LoginForm,
  InputGroup,
  Input,
  ForgotPasswordLink,
  LoginButton,
} from './styles';
import Header from '../../Components/Header';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const formatCPF = (value: any) => {
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.slice(0, 3)}.${value.slice(3)}`;
    return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
  };

  return (
    <>
        <Header />
        <LoginContainer>
            <LoginForm>
              <InputGroup>
                <Input
                  type="text"
                  id="cpf"
                  placeholder="CPF"
                  value={formatCPF(cpf)}
                  onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))}
                />
              </InputGroup>
              <InputGroup>
                  <Input
                      type="password"
                      id="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </InputGroup>
              <ForgotPasswordLink href="#">Esqueci minha senha!</ForgotPasswordLink>
              <LoginButton>Entrar</LoginButton>
            </LoginForm>
        </LoginContainer>
    </>
  );
};

export default Login;
