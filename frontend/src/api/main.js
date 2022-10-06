import axios from "axios";

const instance = axios.create({
  baseURL: "https://j7a302.p.ssafy.io/api-gateway/business-api",
  headers: {
    contentType: "application/json",
  },
});

const UserCountApi = async (success, fail) => {
  await instance.get(`/user/userCount`).then(success).catch(fail);
};

const ReviewApi = async (success, fail) => {
  await instance.get(`/review/serviceReviewTop`).then(success).catch(fail);
};

export { UserCountApi, ReviewApi };
