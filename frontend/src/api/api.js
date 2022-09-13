import axios from "axios";

const defaultURL = "https://i7a302.p.ssafy.io/api/";

export const api = axios.create({
  baseURL: defaultURL,
});

export const apiAuth = axios.create({
  baseURL: defaultURL,
  headers: { Authorization: `accessToken` },
});
