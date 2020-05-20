// JUST MAKING SURE THIS ALL WORKs.
// console.log("hello world!");

class PomoClock {

    constructor(mainMin, mainSec, workDisp, restDisp) {
        this.mainMinutes = mainMin;
        this.mainSeconds = mainSec;
        this.workDisplay = workDisp;
        this.restDisplay = restDisp;

        // this.mainMinutes.innerText = "22:22";
    }

    startTimer() {
        var countDownDate = new Date().getTime() + (60000 * 25)

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // // Time calculations for days, hours, minutes and seconds
            // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo" TODO: CHANGE FROM 'DEMO'
            // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            //     + minutes + "m " + seconds + "s ";
            this.mainMinutes = minutes + " : ";
            this.mainSeconds = seconds;
            // If the count down is finished, write some text
            // if (distance < 0) {
            //     clearInterval(x);
            //     document.getElementById("demo").innerHTML = "EXPIRED";
            // }
        }, 1000);
    }

    pauseTimer() {

    }

    resetTimer() {

    }

    modifyWorkTime(interval) {
        // this.workTime += interval;
        this.updateWorkTimeDisplay();
    }

    modifyRestTime(interval) {
        // this.restTime += interval;
        this.updateRestTimeDisplay();
    }

    updateWorkTimeDisplay() {
        this.workDisplay.innerText =
    }

    updateRestTimeDisplay() {
        this.restDisplay.innerText = "testing resting";
    }

    updateMainTimer() {

    }


}

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

// Make a new clock to play with.
const clock = new PomoClock(mainTimerMinutes, mainTimerSeconds, workLengthDisplay, restLengthDisplay);

// Listeners

// TODO: ALL THIS SHITE NEEDS TO BE working.
startButton.addEventListener('click', () => {
    clock.startTimer();
})
pauseButton.addEventListener('click', () => {
    clock.pauseTimer;
})
increaseWorkTimeBtn.addEventListener('click', () => {
    clock.modifyWorkTime(1);
})
decreaseWorkTimeBtn.addEventListener('click', () => {
    clock.modifyWorkTime(-1);
})
increaseRestTimeBtn.addEventListener('click', () => {
    clock.modifyRestTime(1);
})
decreaseRestTimeBtn.addEventListener('click', () => {
    clock.modifyRestTime(-1);
})


// TODO: REWORK ALL OF THIS BELOW.

// var countDownDate = new Date().getTime() + (60000 * 25)

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo" TODO: CHANGE FROM 'DEMO'
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);