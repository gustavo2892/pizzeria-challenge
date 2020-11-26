import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 30px 30px 0 30px;
  background: #fff;
  padding: 30px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  border: solid 1px #204ac8;
  text-align: center;
  justify-content: center;
  align-items: center;

  h3 {
    ${props =>
      props.addToCartFinalized &&
      css`
        margin-top: 30px;
      `}
    margin-bottom: 30px;
  }

  p {
    & + p {
      margin-top: 20px;
    }
  }

  span {
    margin-top: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

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
    width: 220px;

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

export const ButtonGoToCart = styled(Link)`
  background: #204ac8;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 15px 20px;
  font-weight: 250px;
  font-size: 14px;
  text-transform: uppercase;
  transition: background 0.2s;
  width: 220px;
  &:hover {
    background: ${shade(0.2, '#204ac8')};
  }
`;
