export function addToCartRequest(pizza) {
  return {
    type: '@cart/ADD_REQUEST',
    pizza,
  };
}

export function addToCartSuccess(pizza) {
  return {
    type: '@cart/ADD_SUCCESS',
    pizza,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
