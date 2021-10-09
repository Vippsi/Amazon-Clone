
export const initialState = {
  basket: [] as Array<BasketProvider>,
};
type AppState = typeof initialState;
type Action = { type: string; payload: number };

interface BasketProvider {
  price: number;
  title: string;
  image: string;
  rating?: number;
  id: number;
}

export const getBasketTotal = (basket: Array<BasketProvider>) => {
  let total = 0;
  basket.forEach((item) => {
    total += item.price;
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

    default:
      return state;
  }
};

export default reducer;
