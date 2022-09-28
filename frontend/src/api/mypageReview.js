import { api, apiAuth } from "./api";
// 리뷰 작성
export const reviewWrite=(data) => {
  const url='business-api/review'
  return apiAuth.post(url,data)
}

// 리뷰 조회
export const reviewList = (userSno) => {
  const url =`business-api/review/myreview/${userSno}`
  return apiAuth.get(url)
}

// 리뷰 미작성 구독 조회
export const reviewUnwritten = (userSno) => {
  const url =`business-api/review/unrated/${userSno}`
  return apiAuth.get(url)
}

