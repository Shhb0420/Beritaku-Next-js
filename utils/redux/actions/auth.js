import * as actions from "./actionType";
import * as api from "../../reqData";

export const authLoginUser = (email, password) => {
  return {
    type: actions.AUTH_LOGIN_USER,
    payload: api.authLogin(email, password),
  };
};

export const authRegisterUser = (data) => {
  return {
    type: actions.AUTH_REGISTER_USER,
    payload: api.authRegister(data),
  };
};

export const authClearState = () => {
  return {
    type: actions.AUTH_CLEAR_STATE,
  };
};
