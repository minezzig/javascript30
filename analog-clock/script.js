const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function setTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsDeg = (seconds / 60) * 360 + 90;
  const minutesDeg = (minutes / 60) * 360 + 90;
  const hoursDeg = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(setTime, 1000);
