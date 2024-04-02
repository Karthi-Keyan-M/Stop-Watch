let timer;
let hour = 0;
let minute = 0;
let second = 0;
let lapCount = 0;

function startStop() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStop").innerText = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById("startStop").innerText = "Start";
  }
}

function addLap() {
  lapCount++;
  const lapTime = document.createElement("li");
  lapTime.innerText = `Lap ${lapCount}: ${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
  document.getElementById("lapList").appendChild(lapTime);
}

function reset() {
  clearInterval(timer);
  timer = null;
  hour = 0;
  minute = 0;
  second = 0;
  lapCount = 0;
  document.getElementById("hour").innerText = formatTime(hour);
  document.getElementById("minute").innerText = formatTime(minute);
  document.getElementById("second").innerText = formatTime(second);
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("lapList").innerHTML = ""; 
}

function updateTime() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  document.getElementById("hour").innerText = formatTime(hour);
  document.getElementById("minute").innerText = formatTime(minute);
  document.getElementById("second").innerText = formatTime(second);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
