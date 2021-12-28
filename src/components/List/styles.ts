import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 15px;
`;
export const Item = styled.div`
  padding: 10px 15px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    padding-bottom: 15px;
  }
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
