import React from 'react';

import * as s from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <s.Container>
      <div>
        <s.Avatar />
        <s.Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </s.Info>
      </div>
      <s.FollowButton outlined>Seguir</s.FollowButton>

    </s.Container>
  );
}

export default FollowSugestion;