import axios from "axios";
// import {} from "./next.config";

export const API_URL = "http://localhost:2005";

export const authLogin = (data) => {
  return axios.post(`${API_URL}/auth/login`, data);
};

export const authRegister = (data) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

export const getArticles = (data) => {
  return axios.get(`${API_URL}/articles`, data);
};
