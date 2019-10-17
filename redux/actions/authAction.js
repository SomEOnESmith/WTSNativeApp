import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import * as actionTypes from "./actionTypes";
import instance from "./instance";
const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("api/login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      console.log("decodedUser", decodedUser, "resdata", user);
      await dispatch(setCurrentUser(decodedUser));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      let response = await instance.post("api/register/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};
const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
