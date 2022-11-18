//setInterval(setClock, 1000)

//not to self. work on the second hand function the query selector is not working 




const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
//const secondHand = document.querySelector('[data-second-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
   const currentDate = new Date();

   //seconds function
   //const secondsRatio = currentDate.getSeconds() / 60
   const seconds = currentDate.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   //secondHand.style.transform = `rotate(${secondsRatio}deg)`
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
   //minute function
   //const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60

   
   //hour function
   //const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
   
   //original code below
  // setRotation(secondHand, secondsRatio)
   //setRotation(minuteHand, minutesRatio)
   //setRotation(hourHand, hoursRatio)

}

//function setRotation(element, rotationRatio) {
  // element.style.setProperty('--rotation', rotationRatio * 360)
//}

setInterval(setClock, 1000);

setClock();