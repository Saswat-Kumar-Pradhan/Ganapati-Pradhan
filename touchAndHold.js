const touchElement = document.getElementById('touchElement');
let touchTimer;

touchElement.addEventListener('touchstart', function (event) {
    event.preventDefault();
    touchTimer = setTimeout(() => {
        window.location.href = './personal.html';
    }, 2000);
});

touchElement.addEventListener('touchend', function (event) {
    clearTimeout(touchTimer);
});

touchElement.addEventListener('touchmove', function (event) {
    clearTimeout(touchTimer);
});

// For mouse support
touchElement.addEventListener('mousedown', function (event) {
    touchTimer = setTimeout(() => {
        window.location.href = './personal.html';
    }, 2000);
});

touchElement.addEventListener('mouseup', function (event) {
    clearTimeout(touchTimer);
});

touchElement.addEventListener('mousemove', function (event) {
    clearTimeout(touchTimer);
});
