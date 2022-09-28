import { apiAuth } from "./api";

// mypageMain
export const petInfo = (petSno) => {
  const url =`business-api/pet/petInfo/${petSno}`
  return apiAuth.get(url)
}

export const petAdd = (data) => {
  const url =`business-api/pet`
  return apiAuth.post(url,data)
}

export const petEdit = (data) => {
  const url =`business-api/pet/info`
  return apiAuth.patch(url,data)
}