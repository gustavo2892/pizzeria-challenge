import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdLocalPizza } from 'react-icons/md';

import { Container, OptionsContainer, Option } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="PizzaSoftware" />
      </Link>

      <OptionsContainer>
        <Option to="/menu">
          <div>
            <strong>Cardápio</strong>
            <span>Opções deliciosas</span>
          </div>
          <MdLocalPizza size={36} color="#000" />
        </Option>
        <Option to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 pizza(s)</span>
          </div>
          <MdShoppingCart size={36} color="#000" />
        </Option>
      </OptionsContainer>
    </Container>
  );
}
