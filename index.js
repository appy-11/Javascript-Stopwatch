window.onload = function() {
   var seconds = 00;
   var tens =  00;
   var addTens =  document.getElementById("tens");
   var addSeconds = document.getElementById("seconds");
   var buttonStart = document.getElementById("button-start");
   var buttonStop = document.getElementById("button-stop");
   var buttonReset =  document.getElementById("button-reset");
   var Interval ;
   
   buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
    }
   
   buttonStop.onclick = function(){
       clearInterval(Interval);
   }
   
   buttonReset.onclick = function(){
       
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       addTens.innerHTML = tens ;
       addSeconds.innerHTML = seconds ;
   }
    
    
  function startTimer(){
    tens++ ;
    
    if(tens<9){
        addTens.innerHTML ="0" + tens;
    }
    
    if(tens>9){
        addTens.innerHTML = tens;
    }
    if(tens>99){
        console.log("seconds");
        seconds++;
        addSeconds.innerHTML = "0" + seconds;
        tens = 0 ;
        addTens.innerHTML = seconds;
    }
    
    if(seconds>9){
        addSeconds.innerHTML = seconds ;
    }    
  }  
}