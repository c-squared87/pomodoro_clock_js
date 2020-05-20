// JUST MAKING SURE THIS ALL WORKs.
// console.log("hello world!");

/*
    TODO:
    change labels on start and pause buttons to "reset" and "resume" on pause.
*/

function setWorkTime(interval) {
    workTime += interval;
    updateWorkTimeDisplay();
}

function setRestTime(interval) {
    restTime += interval;
    updateRestTimeDisplay();
}

// THESE MIGHT BE REDUNDANT.
function updateWorkTimeDisplay() { workLengthDisplay.innerText = workTime.toString(); }
function updateRestTimeDisplay() { restLengthDisplay.innerText = restTime.toString(); }

var timer;
var paused = false;
var countDownDate;

var workTime = 25;
var restTime = 5;

// Fields
const mainTimerMinutes = document.querySelector('[data-main-mins]');
const mainTimerSeconds = document.querySelector('[data-main-secs]');

const workLengthDisplay = document.querySelector('[data-work-length]')
const restLengthDisplay = document.querySelector('[data-rest-length]')

// Buttons
const startButton = document.querySelector('[data-start-session]');
const pauseButton = document.querySelector('[data-pause-session]');

const increaseWorkTimeBtn = document.querySelector('[data-increase-work-button]');
const decreaseWorkTimeBtn = document.querySelector('[data-decrease-work-button]');

const increaseRestTimeBtn = document.querySelector('[data-increase-rest-button]');
const decreaseRestTimeBtn = document.querySelector('[data-decrease-rest-button]');


// Listeners
startButton.addEventListener('click', () => {
    // startTimer();

    // TODO: BUILD THIS OUT AND THEN MOVE TO A METHOD FOR CLEANLINESS.
    // startSession()- pass in work and rest? or leave them global.

    if (paused) {
        // clearInterval(timer); TODO: this idea but not this.
    }

    countDownDate = new Date().getTime() + (60000 * workTime); //TODO: move in worktime var here.

    timer = setInterval(function (e) {

        if (!paused) {

            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            mainTimerMinutes.innerText = minutes.toString();
            mainTimerSeconds.innerText = seconds.toString();

            // If the count down is finished, write some text
            if (distance < 0) {
                // clearInterval(x);
                // alert("Timer is Done");
            }

            // timer--;
            // mainTimerSeconds.innerText = timer.toString();
        }

    }, 1000);
});

pauseButton.addEventListener('click', () => {

    console.log("paused state " + paused);

    if (paused) {
        paused = false;
        return;
    }
    paused = true;
});

increaseWorkTimeBtn.addEventListener('click', () => {
    setWorkTime(1);
})
decreaseWorkTimeBtn.addEventListener('click', () => {
    setWorkTime(-1);
})
incrsetstTimeBtn.addEventListener('click', () => {
    modifyRestTime(1);
})
decrsetstTimeBtn.addEventListener('click', () => {
    modifyRestTime(-1);
})
