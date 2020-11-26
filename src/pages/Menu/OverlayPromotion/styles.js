import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Overlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;

  ${props =>
    !props.visibleOverlay &&
    css`
      display: none;
    `}
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 35px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
  }

  button {
    background: #228b22;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transition: background 0.2s;
    width: 300px;
    &:hover {
      background: ${shade(0.2, '#228b22')};
    }

    & + button {
      background: #e61919;
      margin-top: 10px;
      &:hover {
        background: ${shade(0.2, '#e61919')};
      }
    }
  }
`;
