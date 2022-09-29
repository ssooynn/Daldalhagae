import axios from "axios";

const businessInstance = axios.create({
  baseURL: "https://j7a302.p.ssafy.io/api-gateway/business-api/user",
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: `Bearer ` + "a.a.a",
  },
});

const instance = axios.create({
  baseURL: "https://j7a302.p.ssafy.io/api-gateway/auth-api/user",
  headers: {
    contentType: "application/json",
  },
});

const fileinstance = axios.create({
  baseURL: "https://j7a302.p.ssafy.io/api-gateway/business-api/user",
  headers: {
    contentType: "multipart/form",
  },
});

const LoginApi = async (code, success, fail) => {
  await instance.post(`/login`, { code: code }).then(success).catch(fail);
};

const SignupApi = async (formData, success, fail) => {
  await businessInstance.post(`/signup`, formData).then(success).catch(fail);
};

export { LoginApi, SignupApi };
