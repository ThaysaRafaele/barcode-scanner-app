import React from 'react';
import { BottomMenuContainer, BottomMenuItem, BottomMenuText } from './styles';

import Queue from '../../Assets/fila.png';
import GroupIcon from '../../Assets/Group-icon.png';
import ShoppingCartIcon from '../../Assets/Shopping-cart-icon.png';
import QrCodeScannerIcon from '../../Assets/Qr-code-scanner-icon.png';
import PersonIcon from '../../Assets/Person-icon.png';

const BottomMenu = () => {
  return (
    <BottomMenuContainer>
      <BottomMenuItem>
        <img src={Queue} alt="Fila" />
        <BottomMenuText>Fila</BottomMenuText>
      </BottomMenuItem>
      <BottomMenuItem>
        <img src={GroupIcon} alt="Grupos" />
        <BottomMenuText>Grupos</BottomMenuText>
      </BottomMenuItem>
      <BottomMenuItem>
        <img src={ShoppingCartIcon} alt="Carrinho" />
        <BottomMenuText>Carrinho</BottomMenuText>
      </BottomMenuItem>
      <BottomMenuItem>
        <img src={QrCodeScannerIcon} alt="Leitor" />
        <BottomMenuText>Leitor</BottomMenuText>
      </BottomMenuItem>
      <BottomMenuItem>
        <img src={PersonIcon} alt="Perfil" />
        <BottomMenuText>Perfil</BottomMenuText>
      </BottomMenuItem>
    </BottomMenuContainer>
  );
};

export default BottomMenu;
