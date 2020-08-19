var hourHand= document.getElementById("hour");
var minHand = document.getElementById("min");
var secHand = document.getElementById("sec");
var date = new Date();
var date = new Date();
let hour=date.getHours();
let min=date.getMinutes();
let sec= date.getSeconds();
let hp=((hour%12)*360/12)+(min*6/12);
let mp=(min*360/60)+(sec*6/60);
let sp=sec*360/60;

function runClock(){  
  sp=sp+6; 
  mp=mp+(6/60);
  hp=hp+(30/3600);

  hourHand.style.transform="rotate("+hp+"deg)";
  minHand.style.transform="rotate("+mp+"deg)";
  secHand.style.transform="rotate("+sp+"deg)";
}

var interval= setInterval(runClock,1000);
