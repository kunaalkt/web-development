let time = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
};
let timeIntervalID;
let lap = [];

const timeDisplayElement = document.querySelector(".js-time-display");

const startButtonElement = document.querySelector(".js-start-btn");
startButtonElement.addEventListener("click", () => {
  if (startButtonElement.innerText === "Start") {
    startButtonElement.innerText = "Stop";
    timeIntervalID = setInterval(startTimer, 10);
  } else if (startButtonElement.innerText === "Stop") {
    stopTimer();
  }
});

const resetButtonElement = document.querySelector(".js-reset-btn");
resetButtonElement.disabled = true;
resetButtonElement.addEventListener("click", () => {
  resetTimer();
});

const lapButtonElement = document.querySelector(".js-lap-btn");
lapButtonElement.disabled = true;
lapButtonElement.addEventListener("click", () => {
  const lapTime = `${displayMinutes()}:${displaySeconds()}.${displayMilliseconds()}`;
  lap.push(lapTime);
  renderLap();
});

function startTimer() {
  time.milliseconds = time.milliseconds + 10;
  if (time.milliseconds === 1000) {
    time.seconds++;
    time.milliseconds = 0;
  }
  if (time.seconds === 60) {
    time.minutes++;
    time.seconds = 0;
    time.milliseconds = 0;
  }
  resetButtonElement.disabled = false;
  resetButtonElement.classList.add("is-toggled");
  lapButtonElement.disabled = false;
  lapButtonElement.classList.add("is-toggled");
  renderDisplay();
}

function stopTimer() {
  startButtonElement.innerText = "Start";
  clearInterval(timeIntervalID);
  lapButtonElement.disabled = true;
  lapButtonElement.classList.remove("is-toggled");
}

function resetTimer() {
  time.milliseconds = 0;
  time.seconds = 0;
  time.minutes = 0;
  lap = [];
  resetButtonElement.disabled = true;
  resetButtonElement.classList.remove("is-toggled");
  lapButtonElement.disabled = true;
  lapButtonElement.classList.remove("is-toggled");
  stopTimer();
  renderDisplay();
  renderLap();
}

function displayMilliseconds() {
  if (time.milliseconds < 100) {
    const milliseconds = `0${time.milliseconds / 10}`;
    return milliseconds;
  }
  return time.milliseconds / 10;
}

function displaySeconds() {
  if (time.seconds < 10) {
    const seconds = `0${time.seconds}`;
    return seconds;
  }
  return time.seconds;
}

function displayMinutes() {
  if (time.minutes < 10) {
    const minutes = `0${time.minutes}`;
    return minutes;
  }
  return time.minutes;
}

function renderDisplay() {
  const html = `
  ${displayMinutes()}:${displaySeconds()}.${displayMilliseconds()}
  `;
  timeDisplayElement.innerHTML = html;
}

function renderLap() {
  const lapDisplayElement = document.querySelector(".js-lap-display");
  let html = ``;
  lap.forEach((time, index) => {
    html += `<p>#${index + 1}: ${time}</p>`;
  });
  lapDisplayElement.innerHTML = html;
}
