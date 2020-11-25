import styled from 'styled-components';

export const Container = styled.section`
  margin: 110px 30px 0 30px;
  height: 60px;
  background: #fff;
  display: flex;
  border-radius: 4px;
  padding: 20px;
  justify-content: space-between;

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: transparent;
    border-color: transparent;
  }

  span {
    font-size: 12px;
  }

  img {
    width: 50px;
  }
`;
