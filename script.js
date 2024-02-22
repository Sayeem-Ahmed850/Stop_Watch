let mili = 00;
let sec = 00;
let min = 00;
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let milisecond = document.getElementById("milisecond");
let I;

function start() {
    I = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(I);
}

function reset() {
    clearInterval(I);
    minute.innerHTML = "00";
    second.innerHTML = "00";
    milisecond.innerHTML = "00";
}

function startTimer() {
    mili++;
    if (mili > 9) {
        milisecond.innerHTML = mili;
    }
    if (mili > 99) {
        sec++;
        second.innerHTML = "0" + sec;
        mili = 0;
        milisecond.innerHTML = mili;
    }
    if (sec > 9) {
        second.innerHTML = sec;
    }
    if (sec > 59) {
        min++;
        minute.innerHTML = "0" + min;
        sec = 0;
        second.innerHTML = sec;
    }
    if (minute > 9) {
        minute.innerHTML = minute;
    }


}