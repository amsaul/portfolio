//lets set the countdown for the time including dates
let countdownDate = new Date("2023-08-01T23:59:59").getTime();

//lets update the countdown to be updating every second
let countdown = setInterval(function(){
    //lets get current date and time
    let now = new Date().getTime();

    //calculate remaingin time
    let timeRemaining = countdownDate-now;

    //lets calculate hours, minutes and seconds
    let hours = Math.floor((timeRemaining %(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((timeRemaining %(1000*60*60))/(1000*60));
    let seconds = Math.floor((timeRemaining %(1000*60))/(1000));

    //lets now display the timer countdown
    let timerElement = document.getElementById('timer');
    timerElement.textContent = hours.toString().padStart(2, "0") + ":" +
                                minutes.toString().padStart(2, "0") + ":" + 
                                seconds.toString().padStart(2, "0");

    //when the countdown is finished to display a message
    if(timeRemaining < 0){
        clearInterval(countdown);
        timerElement.textContent = "COMING SOOON";
    }
}, 1000);