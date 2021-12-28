import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(400px, 100%);
  }
`;
export const SearchWrapper = styled.div`
  padding: 10px 25px;
  width: min(400px, 100%);
  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);
  max-height: 60px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  padding: 0 10px 0 50px;
  border-radius: 20px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -35px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;
export const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;

  fill: var(--gray);
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 25px 200px;
  margin-top: 5px;

  > div + div {
    //depois da primeira div
    margin-top: 15px;
  }
`;
