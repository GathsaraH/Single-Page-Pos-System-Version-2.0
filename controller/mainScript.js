function forPageOne() {
    document.getElementById('home').style.zIndex = 200
    document.getElementById('order').style.zIndex = -200
    document.getElementById('customer').style.zIndex = -200
    document.getElementById('item').style.zIndex = -200
    document.getElementById('contact').style.zIndex = -200
}

function forPageTwo() {
    document.getElementById('home').style.zIndex = -200
    document.getElementById('order').style.zIndex = 200
    document.getElementById('customer').style.zIndex = -200
    document.getElementById('item').style.zIndex = -200
    document.getElementById('contact').style.zIndex = -200
}

function forPageThree() {
    document.getElementById('home').style.zIndex = -200
    document.getElementById('order').style.zIndex = -200
    document.getElementById('customer').style.zIndex = 200
    document.getElementById('item').style.zIndex = -200
    document.getElementById('contact').style.zIndex = -200
}

function forPageFour() {
    document.getElementById('home').style.zIndex = -200
    document.getElementById('order').style.zIndex = -200
    document.getElementById('customer').style.zIndex = -200
    document.getElementById('item').style.zIndex = 200
    document.getElementById('contact').style.zIndex = -200
}

function forPageFive() {
    document.getElementById('home').style.zIndex = -200
    document.getElementById('order').style.zIndex = -200
    document.getElementById('customer').style.zIndex = -200
    document.getElementById('item').style.zIndex = -200
    document.getElementById('contact').style.zIndex = 200
}

setInterval(() => {
    const time = document.querySelector('.display #time')
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day_night = 'AM'
    if (hours > 12) {
        day_night = 'PM'
        hours = hours - 12
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + day_night
})