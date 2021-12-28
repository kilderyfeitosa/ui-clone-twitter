import React from 'react';
import Button from '../Button'

import * as s from './styles';

const MenuBar: React.FC = () => {
  return (
    <s.Container>
      <s.Topside>
        <s.Logo />
        <s.MenuButton>
          <s.HomeIcon />
          <span>Página Inicial</span>
        </s.MenuButton>
        <s.MenuButton>
          <s.BellIcon />
          <span>Notificação</span>
        </s.MenuButton>
        <s.MenuButton>
          <s.EmailIcon />
          <span>Mensagens</span>
        </s.MenuButton>
        <s.MenuButton>
          <s.FavoriteIcon />
          <span>Favoritados</span>
        </s.MenuButton>
        <s.MenuButton className='active'>
          <s.ProfileIcon />
          <span>Perfil</span>
        </s.MenuButton>
        <Button><span>Tweetar</span></Button>
      </s.Topside>
    </s.Container>
  );
}

export default MenuBar;