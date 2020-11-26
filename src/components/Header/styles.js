import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  border: solid 2px;
  border-color: #228b22 transparent #e61919 transparent;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  img {
    width: 80px;
    margin: 15px 0px 15px 50px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const Option = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-left: 40px;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #000;
    }
    span {
      padding: 5px;
      font-size: 12px;
      color: #000;
    }
  }
`;
