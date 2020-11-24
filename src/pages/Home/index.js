import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/images/logo.png';

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="Pizza" />
      <Link to="/menu">CARDÁPIO</Link>
    </Container>
  );
}
