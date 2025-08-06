function displayTime() {
    const date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.getElementById('session');

    // AM PM Display
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

// Display the time every ten milliseconds (0.01s)
setInterval(displayTime, 10);