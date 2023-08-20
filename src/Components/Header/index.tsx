import { Circle, HeaderContainer, Logo } from './styles';
import logo from '../../Assets/Grupo_Pereira.png';


const Header = () => {
    return (
      <HeaderContainer>
        <Circle>
          <Logo src={logo} alt="Grupo Pereira Logo" />
        </Circle>
      </HeaderContainer>
    );
  };
  
  export default Header;
  