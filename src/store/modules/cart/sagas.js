import { select, put, all, takeLatest } from 'redux-saga/effects';

import history from '../../../services/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ pizza }) {
  const pizzaExists = yield select(state =>
    state.cart.find(p => p.id === pizza.id)
  );
  const currentAmount = pizzaExists ? pizzaExists.amount : 0;
  const amount = currentAmount + 1;
  if (pizzaExists) {
    yield put(updateAmountSuccess(pizza.id, amount));
  } else {
    const data = {
      ...pizza,
      amount: 1,
      priceFormatted: formatPrice(pizza.total),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
