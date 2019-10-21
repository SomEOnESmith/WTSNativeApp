import instance from "./instance";

import { SET_LOADING, GET_CRYPTOS } from "./actionTypes";
import Axios from "axios";

export const getCryptos = () => {
  return async dispatch => {
    dispatch(setCryptosLoading());
    try {
      const res = await Axios.get(
        "https://api.nomics.com/v1/exchange-rates?key=812c00f4b05ddca60825eb0f141116e2"
      );
      const cryptos = res.data.map(crypto => {
        // if (crypto.rate_change >= 0) {
        //   crypto.rate_change = `+${crypto.rate_change}`;
        // }
        {
          crypto.currency;
        }
        {
          crypto.rate;
        }
        return crypto;
      });
      dispatch({
        type: GET_CRYPTOS,
        payload: cryptos
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setCryptosLoading = () => ({
  type: SET_LOADING
});
