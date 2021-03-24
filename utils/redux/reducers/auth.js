import * as actions from "../actions/actionType";

const initialState = {
  user: {},
  isLogin: false,
  msgInvalid: "",
  status: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_LOGIN_USER + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_LOGIN_USER + actions.REJECTED:
      console.log("rejected", payload);
      return {
        ...state,
        isRejected: true,
        isPending: false,
        user: payload,
      };
    case actions.AUTH_LOGIN_USER + actions.FULFILLED:
      if (payload.data.success === false) {
        console.log("gagal", payload.data.status);
        return {
          ...state,
          user: {},
          status: payload.data.status,
          errMsg: payload.data.error,
          isLogin: false,
        };
      } else {
        console.log("SUCESS", payload.data.data);
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          user: payload.data.data,
          errMsg: "",
          status: payload.data.status,
          isRejected: false,
          isLogin: true,
        };
      }
    case actions.AUTH_REGISTER_USER + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_REGISTER_USER + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        status: payload.data.status,
        isPending: false,
      };
    case actions.AUTH_REGISTER_USER + actions.FULFILLED:
      if (payload.data.success === false) {
        return {
          ...state,
          status: payload.data.status,
          errMsg: payload.data.error,
        };
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        user: payload.data.data,
        errMsg: "",
        status: payload.data.status,
        isRejected: false,
        isLogin: true,
      };
    case actions.AUTH_CLEAR_STATE:
      return {
        user: {},
        errMsg: "",
        status: {},
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    default:
      return state;
  }
};

export default authReducer;
