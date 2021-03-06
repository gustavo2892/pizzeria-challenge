import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  border: solid 2px;
  border-color: #228b22 transparent #e61919 transparent;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  position: fixed;
  bottom: 0;
  width: 100%;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #228b22;
      margin-right: 10px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#228b22')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;

    span {
      font-size: 12px;
    }
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const ButtonNewPizza = styled(Link)`
  background: #204ac8;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 11px 20px;
  font-weight: 250px;
  font-size: 14px;
  text-transform: uppercase;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#204ac8')};
  }
`;

export const ContainerFinalized = styled.div`
  margin-top: 110px;
  width: 100%;

  div {
    border: solid 1px #204ac8;
    background: #fff;
    padding: 30px;
    border-radius: 4px;
  }

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;

  h3 {
    margin-top: 20px;
  }

  p {
    margin-top: 5px;
  }
`;
