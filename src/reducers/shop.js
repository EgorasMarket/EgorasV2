import { FETCH_CART, REMOVE_CART, FETCH_LOCKED } from "../actions/types";

const initialState = {
  cart: [],
  products: [],
  locked: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CART:
      return {
        ...state,
        cart: payload,
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: payload,
      };
    case FETCH_LOCKED:
      return {
        ...state,
        locked: payload,
      };

    default:
      return state;
  }
}
