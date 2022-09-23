import axios from "axios";

const instance = axios.create({
    baseURL : "https://j7a302.p.ssafy.io/api-gateway/auth-api/user",
      headers: {
    contentType: "application/json",
  },
});

const LoginApi = async (code, success, fail) => {
    await instance.post(`/login`, {kakaoId:code}).then(success).catch(fail);
}

export {LoginApi};