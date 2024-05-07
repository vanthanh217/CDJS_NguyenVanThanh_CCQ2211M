const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

const setClock = () => {
  const currDate = new Date();
  const seconds = currDate.getSeconds() / 60;
  const minutes = (seconds + currDate.getMinutes()) / 60;
  const hours = (minutes + currDate.getHours()) / 12;
  setRotation(hourHand, hours);
  setRotation(minuteHand, minutes);
  setRotation(secondHand, seconds);
};

function setRotation(e, rotation) {
  e.style.setProperty("--rotation", rotation * 360);
}

setInterval(setClock, 1000);
setClock();
