import { api } from "./api";

export const reviewAll = (page) => {
  const url =`business-api/review/serviceReviewAll?page=${page}&size=20`
  return api.get(url)
}