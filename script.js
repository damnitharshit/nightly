setInterval(displayClock, 100);

function displayClock() {
    const time = document.querySelector('#time');
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    if (hrs > 12) {
        hrs = hrs - 12
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }
    time.textContent = hrs + ':' + min;
}