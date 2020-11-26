import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { pizza } = action;

        draft.push(pizza);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const pizzaIndex = draft.findIndex(p => p.id === action.id);

        if (pizzaIndex >= 0) {
          draft.splice(pizzaIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const pizzaIndex = draft.findIndex(p => p.id === action.id);

        if (pizzaIndex >= 0) {
          draft[pizzaIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
