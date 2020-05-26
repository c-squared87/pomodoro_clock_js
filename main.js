// JUST MAKING SURE THIS ALL WORKs.
// console.log("hello world!");

/*
    TODO:
    change labels on start and pause buttons to "reset" and "resume" on pause.
*/

function setWorkTime(interval) {
    // TODO: MIN MAX VALUES
    workTime += interval;

    if (workTime <= 15) {
        workTime = 15;
    } else if (workTime >= 45) {
        snowb
        workTime = 45;
    }

    workLengthDisplay.innerText = workTime.toString() + ":00";
}

function setRestTime(interval) {
    restTime += interval;

    if (restTime <= 1) {
        restTime = 1;
    } else if (restTime >= 10) {
        restTime = 10;
    }

    if (restTime < 10) {
        restLengthDisplay.innerText = "0" + restTime.toString() + ":00";
    } else {
        restLengthDisplay.innerText = restTime.toString() + ":00";
    }
}

var paused = false;
var countDownDate;

// Default values.
var workTime = 25;
var restTime = 5;

const appContainer = document.querySelector('[data-app]');

// Display Fields
const mainTimerDisplay = document.querySelector('[data-main-mins]');
const workLengthDisplay = document.querySelector('[data-work-length]')
const restLengthDisplay = document.querySelector('[data-rest-length]')

// Buttons
const startButton = document.querySelector('[data-start-session]');
const pauseButton = document.querySelector('[data-pause-session]');

const increaseWorkTimeBtn = document.querySelector('[data-increase-work-button]');
const decreaseWorkTimeBtn = document.querySelector('[data-decrease-work-button]');

const increaseRestTimeBtn = document.querySelector('[data-increase-rest-button]');
const decreaseRestTimeBtn = document.querySelector('[data-decrease-rest-button]');

function startSession() {

    // appContainer.classList.remove("rest");
    // appContainer.classList.add("work");

    countDownDate = new Date().getTime() + (60000 * workTime); //TODO: move in worktime var here.

    setInterval(function() {

        if (!paused) {

            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            mainTimerDisplay.innerText = minutes.toString() + " : " + seconds.toString();
            // mainTimerSeconds.innerText = seconds.toString();

            // If the count down is finished, write some text
            if (distance < 0) {
                alert("Time is up!");
                clearInterval();
                startRest();
            }
        }

    }, 1000);
}

function startRest() {

    // appContainer.classList.remove("work");
    // appContainer.classList.add("rest");

    countDownDate = new Date().getTime() + (60000 * restTime);

    setInterval(function() {

        if (!paused) {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            mainTimerDisplay.innerText = minutes.toString() + " : " + seconds.toString();

            if (distance < 0) {
                clearInterval();
                startRest();
            }
        }
    }, 1000);
}


// Listeners
startButton.addEventListener('click', () => {
    startSession();
});

pauseButton.addEventListener('click', () => {

    if (paused) {
        paused = false;
        pauseButton.innerText = "Pause Session"
        return;
    }

    paused = true;
    pauseButton.innerText = "Resume Session"
});

increaseWorkTimeBtn.addEventListener('click', () => {
    setWorkTime(1);
})
decreaseWorkTimeBtn.addEventListener('click', () => {
    setWorkTime(-1);
})
increaseRestTimeBtn.addEventListener('click', () => {
    setRestTime(1);
})
decreaseRestTimeBtn.addEventListener('click', () => {
    setRestTime(-1);
})



// // Time calculations for days, hours, minutes and seconds
// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);