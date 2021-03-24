import * as actions from "./actionType";
import * as api from "../../reqData";

export const fetchArticles = (data) => {
  return {
    type: actions.GET_ARTICLES,
    payload: api.getArticles(data),
  };
};
