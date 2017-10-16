
var work = true;
var timerStart = false;
var timerInterval, duration,startingDuration;
var brk = 60 * 5;
var duration = 60 * 25;
var display = document.querySelector('#time');

function startTimer() {
    $("#timeDiv").css("border","4px solid #99CC00");
    disableBtns();
    var timer = getDuration(), minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        if (minutes < 60){
            display.textContent = minutes + ":" + seconds;
        }else{
            display.textContent = "1:00" + ":" + seconds;
        }   
        if (--timer < 0) {
            if (work == true){
                timer = brk;
                work = false;
                playSound("sound1");
            }else{
                timer = duration;
                work = true;
                playSound("sound1");
            }
        }
    }, 1000);
}



function playSound(soundObj) {
  var sound = document.getElementById(soundObj);
  sound.play();
}

function toggleTimer(){
    if (timerStart == false){
        startTimer();
        $("#reset").prop("disabled","disabled");
        timerStart = true;
    }else{
        $("#timeDiv").css("border","4px solid red");
        $("#reset").prop("disabled","");
        clearInterval(timerInterval);
        timerStart = false;
    }  
}

function getDuration(){
    var time = $("#time").html();
    var splTime = time.split(":");
    var total = 0;
    if (splTime.length == 2){
        var minutes = parseInt(splTime[0] * 60);
        var seconds = parseInt(splTime[1]);
        total = minutes + seconds;
    }else{
        total = 60 * 60;
    }
    
    
    return total;
    
    
}


decreaseNumber.onclick = function() {
if (brkBox.value > 1){
   brkBox.value = parseInt(brkBox.value) - 1;
   brk = brkBox.value * 60;
    }
}
increaseNumber.onclick = function() {
    if (brkBox.value < 60){
    brkBox.value = parseInt(brkBox.value) + 1;
    brk = brkBox.value * 60;
    }
}

decreaseNumber2.onclick = function() {
if (durationBox.value > 1){
   durationBox.value = parseInt(durationBox.value) - 1;
   duration = durationBox.value * 60;
   minutes = durationBox.value;
   
    minutes = minutes < 10 ? "0" + minutes : minutes;
    display.textContent = minutes + ":00" ;
        
    }
}
increaseNumber2.onclick = function() {
    if (durationBox.value < 60){
   durationBox.value = parseInt(durationBox.value) + 1;
   duration = durationBox.value * 60;
    minutes = durationBox.value;
     if (minutes < 60){
        minutes = minutes < 10 ? "0" + minutes : minutes;
        display.textContent = minutes + ":00" ;
        }else{
            display.textContent = "1:00:00";
        }
    
    }
}

function disableBtns(){
    increaseNumber.disabled = "true";
    decreaseNumber.disabled = "true";
    increaseNumber2.disabled = "true";
    decreaseNumber2.disabled = "true";
}

function enableBtns(){
    increaseNumber.disabled = "";
    decreaseNumber.disabled = "";
    increaseNumber2.disabled = "";
    decreaseNumber2.disabled = "";   
}

function reset(){

    work = true;
    timerStart = false;
    timerInterval, duration,startingDuration;
    brk = 60 * 5;
    duration = 60 * 25;
     minutes = duration / 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    display.textContent = minutes + ":00" ;
    brkBox.value = brk / 60;
    durationBox.value = duration / 60;
    enableBtns();
    $("#timeDiv").css("border","4px solid #99CC00");

}


$(document).ready(function(){
    startingDuration = 60 * 0.5;
    $("#timeDiv").click(toggleTimer);
    $("#reset").click(reset);
    
});