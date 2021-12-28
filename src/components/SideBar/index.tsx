import React from 'react';
import StickyBox from 'react-sticky-box'

import FollowSugestion from '../FollowSugestion';
import List from '../List';
import News from '../News';

import * as s from './styles';

const SideBar: React.FC = () => {
  return (
    <s.Container>
      <s.SearchWrapper>
        <s.SearchInput placeholder='Buscar no Twitter' />
        <s.SearchIcon />
      </s.SearchWrapper>

      <StickyBox>
        <s.Body>
          <List
            title='Talves você curta'
            elements={[
              <FollowSugestion
                name='Anitta'
                nickname='@anitta'
              />,
              <FollowSugestion
                name='+a'
                nickname='@maisa'
              />,
              <FollowSugestion
                name='Luiza Sonza'
                nickname='@luizasonza'
              />
            ]}
          />
          <List
            title='Últimas Notícias'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Últimas Notícias'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Últimas Notícias'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </s.Body>
      </StickyBox>
    </s.Container>
  );
}

export default SideBar;