import { ADD_TO_CART, REMOVE_ITEM } from "./actionTypes";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};
