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

  img {
    width: 370px;
  }

  a {
    background: transparent;
    width: 200px;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    color: #e61919;
    font-weight: 700;
    border: 1px solid #e61919;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#e61919')};
      color: #fff;
    }
  }
`;
