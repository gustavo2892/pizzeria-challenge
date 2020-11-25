import styled, { css } from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${props =>
    props.currentOption !== 0 &&
    css`
      position: fixed;
    `}
`;
