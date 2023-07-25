const timer = document.querySelector('.timer');
let time = 0;

function updateTimer() {
    time = time + 1;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60) - hours * 60;
    let seconds = time - minutes * 60 - hours * 3600;

    seconds < 10 ? seconds = `0${seconds}` : seconds = seconds;
    minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;
    hours < 10 ? hours = `0${hours}` : hours = hours;
   
    timer.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(updateTimer, 1000);