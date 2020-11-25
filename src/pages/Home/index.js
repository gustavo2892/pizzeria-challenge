import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/images/logo.png';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <img src={logo} alt="Pizza" />
        <Link to="/menu">CARDÁPIO</Link>
      </Container>
    </>
  );
}
