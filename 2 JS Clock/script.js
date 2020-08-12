const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function showTime(){

    const time = new Date();

    const second = time.getSeconds();
    const secondDegreese = second / 60 * 360;

    const minutes = time.getMinutes();
    const minutesDegreese = minutes / 60 * 360;

    const hour = time.getHours();
    const hourDegreese = hour / 12 * 360;

    
    secHand.style.transform = `rotate(${secondDegreese}deg)`;
    minHand.style.transform = `rotate(${minutesDegreese}deg)`;
    hourHand.style.transform = `rotate(${hourDegreese}deg)`;    
}

showTime();
setInterval(showTime, 1000);