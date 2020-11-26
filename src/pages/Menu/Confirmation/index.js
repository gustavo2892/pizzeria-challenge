import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { MdCheckCircle } from 'react-icons/md';
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

  console.log('Essa é a pizza = ', pizza);

  return (
    <>
      <Card
        title="Confirmação"
        handleSubtractOption={handleSubtractOption}
        currentOption={currentOption}
        addToCartFinalized={addToCartFinalized}
      />
      {!addToCartFinalized && (
        <Container addToCartFinalized={addToCartFinalized}>
          <h3>Detalhes da Pizza</h3>
          <p>
            <strong>SABOR </strong>
            <br />
            {pizza.flavor}
          </p>
          <p>
            <strong>TAMANHO </strong>
            <br />
            {pizza.size}
          </p>
          <p>
            <strong>MASSA </strong>
            <br />
            {pizza.dough}
          </p>
          <span>
            <strong>TOTAL </strong>
            <br />
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
        <Container addToCartFinalized={addToCartFinalized}>
          <MdCheckCircle size={70} color="#228b22" />
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
    id: PropTypes.string,
    flavor: PropTypes.string,
    mode: PropTypes.string,
    size: PropTypes.string,
    dough: PropTypes.string,
    priceFlavor: PropTypes.number,
    priceSize: PropTypes.number,
    total: PropTypes.number,
  }),
  currentOption: PropTypes.number,
  handleSubtractOption: PropTypes.func,
  handleResetPizza: PropTypes.func,
  addToCartFinalized: PropTypes.bool,
  setAddToCartFinalized: PropTypes.func,
};
