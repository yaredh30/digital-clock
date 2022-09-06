const hourEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const amOrPm = document.querySelector('#amorpm');


function createTime() {
    const date = new Date();
    let hours = date.getHours();
    hours = (hours % 12);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = 'AM'
    hourEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    if(hours >=0 || hours <= 12 ) {
        amorpm = 'AM'
    } else {
        amorpm = 'PM'
    }
    amOrPm.textContent = amorpm
    
}


createTime()
setInterval(createTime, 1000)
