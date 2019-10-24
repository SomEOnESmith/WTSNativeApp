import instance from "./instance";

import { SET_LOADING, GET_CRYPTOS } from "./actionTypes";
import Axios from "axios";

export const getCryptos = () => {
  return async dispatch => {
    dispatch(setCryptosLoading());
    try {
      const res = await instance.get("api/list/");
      const cryptos = res.data.map(crypto => {
        if (crypto.rate_change >= 0) {
          crypto.rate_change = `+${crypto.rate_change}`;
        }
        return crypto;
      });
      dispatch({
        type: GET_CRYPTOS,
        payload: cryptos
      });
    } catch (err) {
      console.error("Error while fetching cryptos", err.response);
    }
  };
};

export const setCryptosLoading = () => ({
  type: SET_LOADING
});
