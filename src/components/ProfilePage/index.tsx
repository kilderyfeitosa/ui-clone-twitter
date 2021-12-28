import React from 'react';
import Feed from '../Feed';

import * as s from './styles';

const ProfilePage: React.FC = () => {
  return (
    <s.Container>
      <s.Banner>
        <s.Avatar />
      </s.Banner>
      <s.ProfileData>
        <s.EditButton outlined>Editar Perfil</s.EditButton>
        <h1>Kildery Feitosa</h1>
        <h2>@KilderyFeitosa</h2>
        <p>
          Desenvolvedor Front End ReactJS
        </p>
        <ul>
          <li>
            <s.LocationIcon />
            Quixadá, Ceará, Brasil
          </li>
          <li>
            <s.CakeIcon />
            Nascido(a) em 06 de Dezembro de 1995
          </li>
        </ul>
        <s.Followage>
          <span>
            seguindo <strong>999</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </s.Followage>
      </s.ProfileData>
      <Feed />
    </s.Container>

  );
}

export default ProfilePage;