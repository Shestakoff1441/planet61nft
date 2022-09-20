//Countdown Timer
export const countdown = (time, minusTime = 0) => {
  const countDownTime = time * 1000;
  const now = new Date().getTime() - minusTime;
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const mDays = days < 10 ? ["0", `${days}`] : days.toString().split("");
  const mHours = hours < 10 ? ["0", `${hours}`] : hours.toString().split("");
  const mMinutes =
    minutes < 10 ? ["0", `${minutes}`] : minutes.toString().split("");
  const mSeconds =
    seconds < 10 ? ["0", `${seconds}`] : seconds.toString().split("");

  // return `${mDays}${mHours}${mMinutes}${mSeconds}`;
  // if( !days && !hours && !minutes && !seconds) {
  //   return 'hello'
  // }
  return {
    days: mDays,
    hours: mHours,
    minutes: mMinutes,
    seconds: mSeconds
  };
};
