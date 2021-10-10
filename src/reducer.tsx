import { IProductProps } from './interfaces';

export const initialState = {
  basket: [] as Array<IProductProps>,
  user: null,
};
type AppState = typeof initialState;
type Action =
  | { type: 'ADD_TO_BASKET'; payload: number }
  | { type: 'REMOVE_FROM_BASKET'; payload: number }
  | { type: 'SET_USER'; payload: Object };

export const getBasketTotal = (basket: Array<IProductProps>) => {
  let total = 0;
  basket.forEach((item) => {
    if (item.price) {
      total += item.price;
    }
  });
  return total;
};

const reducer = (state: AppState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('cant remove', action.payload);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
