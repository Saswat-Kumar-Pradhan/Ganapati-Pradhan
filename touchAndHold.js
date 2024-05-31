const touchElement = document.getElementById('touchElement');
let touchTimer;
let isLongPress = false;

// Function to handle redirection
function redirectTo(url) {
    window.location.href = url;
}

// Common event handlers for touch and mouse
function startTimer(url) {
    touchTimer = setTimeout(() => {
        isLongPress = true;
        redirectTo(url);
    }, 2000);
}

function clearTimer() {
    clearTimeout(touchTimer);
}

// Touch events
touchElement.addEventListener('touchstart', function (event) {
    event.preventDefault();
    isLongPress = false;
    startTimer('./personal.html');
});

touchElement.addEventListener('touchend', function (event) {
    clearTimer();
    if (!isLongPress) {
        redirectTo('./click.html');
    }
});

touchElement.addEventListener('touchmove', function (event) {
    clearTimer();
});

// Mouse events
touchElement.addEventListener('mousedown', function (event) {
    isLongPress = false;
    startTimer('./personal.html');
});

touchElement.addEventListener('mouseup', function (event) {
    clearTimer();
    if (!isLongPress) {
        redirectTo('./click.html');
    }
});

touchElement.addEventListener('mousemove', function (event) {
    clearTimer();
});