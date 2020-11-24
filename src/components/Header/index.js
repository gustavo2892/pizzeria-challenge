import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="PizzaSoftware" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 pizza(s)</span>
        </div>
        <MdShoppingCart size={36} color="#cc0000" />
      </Cart>
    </Container>
  );
}
