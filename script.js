let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

startPauseBtn.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
  isRunning = true;
  startPauseBtn.textContent = 'Pause';
  timer = setInterval(() => {
    elapsedTime += 10;
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  isRunning = false;
  startPauseBtn.textContent = 'Start';
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  elapsedTime = 0;
  updateDisplay();
  lapsList.innerHTML = '';
}

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

function recordLap() {
  const lapTime = display.textContent;
  const li = document.createElement('li');
  li.textContent = lapTime;
  lapsList.appendChild(li);
}
