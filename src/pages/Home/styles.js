import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  flex: 1;
  position: absolute;
  height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  a {
    background: transparent;
    width: 200px;
    height: 40px;
    margin-top: 40px;
    border-radius: 5px;
    color: #8b0000;
    font-weight: 700;
    border: 1px solid #8b0000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#8b0000')};
      color: #fff;
    }
  }
`;
