import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../util/format';
import * as CartActions from '../../../store/modules/cart/actions';
import { Container, ButtonsContainer, ButtonGoToCart } from './styles';
import Card from '../../../components/Card';

function Confirmation({
  pizza,
  currentOption,
  handleSubtractOption,
  handleResetPizza,
  addToCartFinalized,
  setAddToCartFinalized,
}) {
  const dispatch = useDispatch();

  function handleAddPizza() {
    dispatch(CartActions.addToCartRequest(pizza));
    setAddToCartFinalized(true);
  }

  return (
    <>
      <Card
        title="Confirmação"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
        addToCartFinalized={addToCartFinalized}
      />
      {!addToCartFinalized && (
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
            {formatPrice(pizza.total)}
          </span>
          <ButtonsContainer>
            <button type="button" onClick={() => handleAddPizza()}>
              ADICIONAR AO CARRINHO
            </button>
            <button type="button" onClick={() => handleResetPizza()}>
              CANCELAR PIZZA
            </button>
          </ButtonsContainer>
        </Container>
      )}
      {addToCartFinalized && (
        <Container>
          <h3>A pizza foi adicionada com sucesso no carrinho</h3>
          <ButtonsContainer>
            <button type="button" onClick={() => handleResetPizza()}>
              ESCOLHER OUTRA PIZZA
            </button>
            <ButtonGoToCart to="/cart">IR PARA O CARRINHO</ButtonGoToCart>
          </ButtonsContainer>
        </Container>
      )}
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
  addToCartFinalized: PropTypes.bool,
  setAddToCartFinalized: PropTypes.func,
};
