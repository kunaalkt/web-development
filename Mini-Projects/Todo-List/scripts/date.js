const dateTimeText = document.querySelector(".js-date-time-text");

getDayDate();
setInterval(getTime, 1000);

function getDayDate() {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = week[new Date().getDay()];
  const date = new Date().getDate();
  const month = months[new Date().getMonth()];

  const html = `${day}, ${date} ${month} | <span class="time-text js-time-text"></span>`;
  dateTimeText.innerHTML = html;
  getTime();
}

function getTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hours === 0) {
    getDayDate();
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  const time = `${hours}:${minutes}:${seconds}`;
  const timeTextElement = document.querySelector(".js-time-text");
  timeTextElement.innerText = `${time}`;
}
