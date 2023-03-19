let time = document.querySelector("#time");
let Stop = document.querySelector("#btn1");
let Alert = document.querySelector("#btn2");
let AlertStop = document.querySelector("#btn3");

function showtime() {
    var date = new Date();
    var hours = date.toLocaleTimeString();
    time.innerHTML = hours;
}
  let stops = setInterval(showtime, 1000);
 
  function stop() {
    clearInterval(stops);
}

let alertTimeOut1;
function alertDelay(){
    alertTimeOut1 = setTimeout(function (){
        alert("Hello");
    },3000);
}   

function alertStop() {
    clearTimeout(alertTimeOut1);
}