// 자동 하이픈

export const autoHypen = (phone) => {
  return phone.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ; 
}

//  전화번호 유효성 검사
export const telCheck = (phone) => {
  //  일반전화번호 유효성 검사
  const regExp1 = /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]))(\d{3,4})(\d{4})$/;
  const result1 = regExp1.test(phone);
  console.log(result1);

  // 휴대폰 유효성 체크
  const regExp2 = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  const result2 = regExp2.test(phone);
  console.log(result2);

  return result1 || result2
}






