import React from 'react';

import * as s from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <s.Container>
      <s.Item>
        <s.Title>{title}</s.Title>
        {elements.map((element, index) => (
          <s.Item key={index}>{element}</s.Item>
        ))}
      </s.Item>
    </s.Container>
  );
}

export default List;