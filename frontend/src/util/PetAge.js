export const PetAge = (today, birthday) => {
    const todayArr = today.split('-')
    const birthdayArr = birthday.split('-')
    const da1 = new Date(todayArr[0], todayArr[1], todayArr[2]);
    const da2 = new Date(birthdayArr[0], birthdayArr[1], birthdayArr[2]);
    const dif = da1 - da2
    const cDay = 24 * 60 * 60 * 1000;
    const cMonth = cDay * 30;

    return parseInt(dif/cMonth)
}   