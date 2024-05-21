const touchElement = document.getElementById('touchElement');
let touchTimer;

touchElement.addEventListener('touchstart', function (event) {
    touchTimer = setTimeout(() => {
        window.location.href = './personal.html'; // Replace with your target URL
    }, 2000); // Hold duration (in milliseconds)
});

touchElement.addEventListener('touchend', function (event) {
    clearTimeout(touchTimer);
});

touchElement.addEventListener('touchmove', function (event) {
    clearTimeout(touchTimer);
});

// For mouse support (optional)
touchElement.addEventListener('mousedown', function (event) {
    touchTimer = setTimeout(() => {
        window.location.href = './personal.html'; // Replace with your target URL
    }, 2000); // Hold duration (in milliseconds)
});

touchElement.addEventListener('mouseup', function (event) {
    clearTimeout(touchTimer);
});

touchElement.addEventListener('mousemove', function (event) {
    clearTimeout(touchTimer);
});
