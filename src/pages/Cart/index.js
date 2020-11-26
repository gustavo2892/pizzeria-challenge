import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';
import Header from '../../components/Header';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total, ButtonNewPizza } from './styles';

export default function Cart() {
  const total = useSelector(state => {
    return formatPrice(
      state.cart.reduce((totalSum, pizza) => {
        return totalSum + pizza.total * pizza.amount;
      }, 0)
    );
  });

  const cart = useSelector(state =>
    state.cart.map(pizza => ({
      ...pizza,
      subtotal: formatPrice(pizza.total * pizza.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(pizza) {
    dispatch(CartActions.updateAmountRequest(pizza.id, pizza.amount + 1));
  }

  function decrement(pizza) {
    dispatch(CartActions.updateAmountRequest(pizza.id, pizza.amount - 1));
  }
  console.log('Esse é o cart => ', cart);
  return (
    <>
      <Header />
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(pizza => (
              <tr key={pizza.id}>
                <td>
                  <strong>
                    {pizza.flavor}
                    <span>{`(Tamanho ${pizza.size} com Massa ${pizza.dough})`}</span>
                  </strong>
                  <span>{pizza.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(pizza)}>
                      <MdRemoveCircleOutline size={20} color="#e61919" />
                    </button>
                    <input type="number" readOnly value={pizza.amount} />
                    <button type="button" onClick={() => increment(pizza)}>
                      <MdAddCircleOutline size={20} color="#228b22" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{pizza.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(pizza.id))
                    }
                  >
                    <MdDelete size={20} color="#e61919" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <div>
            {cart.length > 0 && <button type="button">Finalizar Pedido</button>}

            <ButtonNewPizza to="/menu">
              {cart.length > 0 ? 'Escolher mais pizza' : 'Escolher pizza'}
            </ButtonNewPizza>
          </div>
          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
