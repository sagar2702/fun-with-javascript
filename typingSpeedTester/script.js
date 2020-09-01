var typedText= document.getElementById("urText");
var textToType = document.querySelector(".mainText p");
var restart = document.getElementById("reset");
var theTimer = document.getElementById("timer");
var complete = document.querySelector(".control span");

var timer=[0,0,0,0];
var originalText=textToType.innerHTML;
var interval;
var isTimerRunnig=false;

//reset timer
function reset(){
    //console.log("timer reset");
    typedText.value="";
    timer=[0,0,0,0];
    isTimerRunnig=false;
    theTimer.innerHTML="00:00:00";
    complete.innerHTML="";
    typedText.style.borderColor="grey";
    theTimer.style.color="#242424";
    clearInterval(interval);
    
}

//function to add zeroes in timer
function leadingZeroes(time){
      if(time<=9){
          time="0"+time;
      }
      return time;
}

//timer function
function startTimer(){
    theTimer.innerHTML=leadingZeroes(timer[0])
    +":"+leadingZeroes(timer[1])+":"+leadingZeroes(timer[2]);
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

//start timer

function start(){
    let textEntered=typedText.value;
    if(textEntered.length==0&& !isTimerRunnig){
        isTimerRunnig=true;
        interval=setInterval(startTimer,10);
    }
   
}

//checking typed text equal to given one or not
function check(){
    let textEntered=typedText.value;
    if(textEntered==originalText){
        complete.innerHTML="Completed!!";
        typedText.style.borderColor="#429890";
        theTimer.style.color="steelblue";
        clearInterval(interval);
        
    }
}


//event listeners
typedText.addEventListener("keypress",start,false);
typedText.addEventListener("keyup", check,false);
restart.addEventListener("click", reset,false);


