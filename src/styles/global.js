import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/images/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%
  }
  body {
    background: url(${BackgroundImage}) no-repeat center;
    -webkit-font-smoothing: antialiased !important;
  }
  a {
    text-decoration: none;;
  }
`;
