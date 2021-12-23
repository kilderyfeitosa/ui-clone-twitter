import React from 'react';

import ProfilePage from '../ProfilePage'

import * as s from './styles';

const Main: React.FC = () => {
  return (
    <s.Container>
      <s.Header>
        <button>
          <s.BackIcon />
        </button>
        <s.ProfileInfo>
          <strong>Kildery Feitosa</strong>
          <span>999 Tweets</span>
        </s.ProfileInfo>
      </s.Header>
      <ProfilePage />
      <s.BottomMenu>
        <s.HomeIcon className='active' />
        <s.SearchIcon />
        <s.BellIcon />
        <s.EmailIcon />
      </s.BottomMenu>
    </s.Container>
  );
}

export default Main;