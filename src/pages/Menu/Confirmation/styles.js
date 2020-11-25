import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 50px 30px 0 30px;
  background: #fff;
  padding: 30px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;

  h3 {
    margin-bottom: 30px;
  }

  p {
    & + p {
      margin-top: 2px;
    }
  }

  span {
    margin-top: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  button {
    background: #228b22;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    padding: 15px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#228b22')};
    }

    & + button {
      background: #e61919;
      &:hover {
        background: ${shade(0.2, '#e61919')};
      }
    }
  }
`;
