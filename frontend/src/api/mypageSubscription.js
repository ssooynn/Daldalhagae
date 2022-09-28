import { apiAuth } from "./api";
// 현재 구독 내역 조회
export const currentSubscription = (userSno) => {
  const url =`business-api/subscription/now/${userSno}`
  return apiAuth.get(url)
}

export const subscriptionAll = (userSno) => {
  const url =`business-api/subscription/all/${userSno}`
  return apiAuth.get(url)
}