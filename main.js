console.log("hello world!");

const startButton = document.querySelector('[data-start-session]');
const pauseButton = document.querySelector('[data-pause-session]');
const increaseWorkTimeBtn = document.querySelector('[data-increase-work-button]');
const decreaseWorkTimeBtn = document.querySelector('[data-decrease-work-button]');
const increaseRestTimeBtn = document.querySelector('[data-increase-rest-button]');
const decreaseRestTimeBtn = document.querySelector('[data-decrease-rest-button]');

startButton.addEventListener('click', () => {
    console.log("startButton clicked");
})

pauseButton.addEventListener('click', () => {
    console.log("pauseButton clicked");
})

increaseWorkTimeBtn.addEventListener('click', () => {
    console.log("work time increased");
})
decreaseWorkTimeBtn.addEventListener('click', () => {
    console.log("work time decreased");
})

increaseRestTimeBtn.addEventListener('click', () => {
    console.log("rest time increased");
})
decreaseRestTimeBtn.addEventListener('click', () => {
    console.log("rest time decreased");
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
