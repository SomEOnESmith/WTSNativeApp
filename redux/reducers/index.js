import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import cryptosReducer from "./cryptosReducer";

import authReducer from "./authReducer";

export default combineReducers({
  cartReducer: cartReducer,
  cryptosReducer: cryptosReducer,
  authReducer: authReducer
});
