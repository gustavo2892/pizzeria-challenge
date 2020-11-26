import styled from 'styled-components';
import { shade } from 'polished';

export const ProductList = styled.ul`
  position: relative;
  margin: 30px 30px 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    border: solid 1px #204ac8;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    img {
      align-self: center;
      width: 250px;
      height: 150px;
      border-radius: 4px;
      margin-bottom: 12px;
      border: solid 1px #e61919;
    }
    > strong {
      font-size: 18px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      text-align: center;
    }
    > span {
      font-size: 15px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: #228b22;
      height: 30px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${shade(0.2, '#228b22')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg: {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
