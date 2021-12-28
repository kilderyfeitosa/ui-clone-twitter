import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 15px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
export const FollowButton = styled(Button)`
  padding: 5px 15px;
  right: 0;
`;
