import React from 'react';

import * as s from './styles';

const Tweet: React.FC = () => {
  return (
    <s.Container>
      <s.Retweeted>
        <s.RocketseatIcon />
        Você retweetou
      </s.Retweeted>
      <s.Body>
        <s.Avatar />
        <s.Content>
          <s.Header>
            <strong>Rocketseat</strong>
            <span>@Rocketseat</span>
            <s.Dot />
            <time>27 de Jun</time>
          </s.Header>
          <s.Description>Foguete não tem ré</s.Description>
          <s.ImageContent />
          <s.Icons>
            <s.Status>
              <s.ComentIcon />
              18
            </s.Status>
            <s.Status>
              <s.RetweetIcon />
              18
            </s.Status>
            <s.Status>
              <s.LikeIcon />
              99
            </s.Status>
          </s.Icons>
        </s.Content>

      </s.Body>
    </s.Container>
  );
}

export default Tweet;