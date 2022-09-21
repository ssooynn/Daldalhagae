export const nameCheck = (name) =>{
  const regExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
  return regExp.test(name);
}