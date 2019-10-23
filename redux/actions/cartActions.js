import { ADD_TO_CART, REMOVE_ITEM, CHECKOUT } from "./actionTypes";
import instance from "./instance";

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


export const checkout = cryptosCart => {
  // return {
  //   type: CHECKOUT
  // };
  return async dispatch => {
    try {
      const res = await instance.post("api/checkout/", cryptosCart);
      dispatch({
        type: CHECKOUT
      });
    } catch (err) {
      console.error("Error while posting cart", err);
    }
  };
};