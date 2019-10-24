import { ADD_TO_CART, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const newitem = state.items.find(
        itemObj => item.currency === itemObj.currency
      );
      if (newitem) {
        newitem.quantity = (+newitem.quantity + +item.quantity).toFixed(3);

        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat([item])
        };
      }

    case REMOVE_ITEM:
      let updatedItems = state.items.filter(item => item !== payload);
      return {
        ...state,
        items: updatedItems
      };

    case CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};
