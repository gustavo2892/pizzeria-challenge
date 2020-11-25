import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../util/format';
import { Container, ButtonsContainer } from './styles';
import Card from '../../../components/Card';

function Confirmation({
  pizza,
  currentOption,
  handleSubtractOption,
  handleResetPizza,
}) {
  return (
    <>
      <Card
        title="Confirmação"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
      />
      <Container>
        <h3>Detalhes da Pizza</h3>
        <p>
          <strong>SABOR: </strong>
          {pizza.flavor}
        </p>
        <p>
          <strong>TAMANHO: </strong>
          {pizza.size}
        </p>
        <p>
          <strong>MASSA: </strong>
          {pizza.dough}
        </p>
        <span>
          <strong>TOTAL: </strong>
          {formatPrice(pizza.priceFlavor + pizza.priceSize)}
        </span>
        <ButtonsContainer>
          <button type="button">ADICIONAR AO CARRINHO</button>
          <button type="button" onClick={() => handleResetPizza()}>
            CANCELAR PIZZA
          </button>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default Confirmation;

Confirmation.propTypes = {
  pizza: PropTypes.objectOf({
    flavor: PropTypes.string,
    size: PropTypes.string,
    dough: PropTypes.string,
    priceFlavor: PropTypes.number,
    priceSize: PropTypes.number,
  }),
  currentOption: PropTypes.number,
  handleSubtractOption: PropTypes.func,
  handleResetPizza: PropTypes.func,
};
