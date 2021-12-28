import React from 'react';
import Tweet from '../Tweet';

import * as s from './styles';

const Feed: React.FC = () => {
  return (
    <s.Container>
      <s.Tab>Tweets</s.Tab>

      <s.Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </s.Tweets>
    </s.Container>
  );
}

export default Feed;