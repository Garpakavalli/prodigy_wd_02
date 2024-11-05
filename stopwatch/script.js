let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let laps = [];

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const formattedTime = 
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    document.getElementById("display").textContent = formattedTime;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);
    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = '';
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
}

function lap() {
    const lapTime = document.getElementById("display").textContent;
    const lapElement = document.createElement("div");
    lapElement.textContent = `Lap ${laps.length + 1}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapElement);
    laps.push(lapTime);
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);
