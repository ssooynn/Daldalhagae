import axios from "axios";

const defaultURL = "https://j7a302.p.ssafy.io/api-gateway/";

export const api = axios.create({
  baseURL: defaultURL,
});

export const apiAuth = axios.create({
  baseURL: defaultURL,
  headers: { Authorization: `Bearer a.a.a` },
});


export {axios};
