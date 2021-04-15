// Import timer 'div' as variable, using ID, we can modify it.
const timer = document.getElementById( 'stopwatch' );

//Creating hour, minute and seconds variables and declaring their initial value as 0
var hr = 0;
var min = 0;
var sec = 0;

// Creating a variable so we can verify if stopwatch is running or not
var stoptime = true;

// If stopwatch is not running, turn it on and go to the 'timerCycle()' function.
// (Only runs when 'Start' button in clicked)
function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

// If stopwatch is running, turn it off.
// (Only runs when 'Stop' button is clicked)
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {

    // Verify that stopwatch is on.
    if (stoptime == false) {

        // Use to parse a string into an integar.
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        // Add 1 to seconds.
        sec = sec + 1;

        // If seconds are equal to 60, minutes = 1 and seconds become 0 again.
        if(sec == 60) {
            min = min + 1;
            sec = 0;
        }

        // If minutes are equal to 60, hours = 1 and seconds + minutes become 0 again.
        if (min == 60) {
            hr = hr + 1;
            min  = 0;
            sec = 0;
        }

        // If sec/min/hr are lower than 10, add 0 in front.
        // (This is why we need to parse everything at the start)
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        // Add these values to 'timer' div.
        timer.innerHTML = hr + ':' + min + ':' + sec;

        // This makes sure there is a timeout of 1000ms (1s) before repeating the 'timerCycle()'.
        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    // Used to reset timer to 00:00:00
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
}