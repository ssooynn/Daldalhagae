import axios from "axios";

const defaultURL = "https://j7a302.p.ssafy.io/api-gateway/auth-api/";

export const api = axios.create({
  baseURL: defaultURL,
});

export const apiAuth = axios.create({
  baseURL: defaultURL,
  headers: { Authorization: `accessToken` },
});


export {axios};
