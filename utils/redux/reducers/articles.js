import * as actions from "../actions/actionType";
import { fetchArticles } from "../actions/articles";

const initialState = {
  msg: "",
  status: "",
  articles: [],

  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const articlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_ARTICLES + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_ARTICLES + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.GET_ARTICLES + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          articles: payload.data.data,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
        };
      }
    default:
      return state;
  }
};

export default articlesReducer;
