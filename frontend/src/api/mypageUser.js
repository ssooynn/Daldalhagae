import { apiAuth } from "./api";

// mypageMain
export const mypageMain = (userSno) => {
  const url =`business-api/user/mypage/${userSno}`
  return apiAuth.get(url)
}

// 회원정보 조회
export const userInfoGet = (userSno) => {
  const url =`business-api/user/info/${userSno}`
  return apiAuth.get(url)
}

// 회원정보 수정
export const userEdit = (data) =>{
  const url ='business-api/user/info'
  return apiAuth.patch(url, data)
}

export const userDrop = (userInfo) => {
  const url = `business-api/user/withdrow`
  return apiAuth.patch(url, userInfo)
}
