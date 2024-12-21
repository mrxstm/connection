//1.rock  2.paper 3.bot

function rock() {

    let botChoice = Math.floor(Math.random() * 3) + 1;  // 1 to 3 random number generation 
    //Math.floor ensures that the number is not a floating value.

    document.getElementById("player").textContent = "You choose rock"; 

    if(botChoice == 1) {
        document.getElementById("bot").textContent = "Bot choose rock";
        document.getElementById("output").textContent = "It's a tie";
    }
    else if(botChoice == 2) {
        document.getElementById("bot").textContent = "Bot choose paper"; 
        document.getElementById("output").textContent = "Bot wins";
    }
    else {
        document.getElementById("bot").textContent = "Bot choose scissors";
        document.getElementById("output").textContent = "You win";


    }
}

function paper() {

    let botChoice = Math.floor(Math.random() * 3) + 1;

    document.getElementById("player").textContent = "You choose paper";
    
    if(botChoice == 2) {
        document.getElementById("bot").textContent = "Bot choose paper";
        document.getElementById("output").textContent = "It's a tie";
    }
    else if(botChoice ==  1) {
        document.getElementById("bot").textContent = "Bot choose rock"; //paper beats rock
        document.getElementById("output").textContent = "You win";
    }
    else {
        document.getElementById("bot").textContent = "Bot chose scissors";
        document.getElementById("output").textContent = "You lose";


    }
    
}
function scissors() {
  
    let botChoice = Math.floor(Math.random() * 3) + 1;

    document.getElementById("player").textContent = "You choose scissors";
    
    if(botChoice == 3) {
        document.getElementById("bot").textContent = "Bot choose scissors";
        document.getElementById("output").textContent = "It's a tie";
    }
    else if(botChoice == 2) {
        document.getElementById("bot").textContent = "Bot choose paper";
        document.getElementById("output").textContent = "You win";
    }
    else {
        document.getElementById("bot").textContent = "Bot choose rock";
        document.getElementById("output").textContent = "You lose";


    }
}

//number
let number = 0;

function increase() {

  number++;
  document.getElementById("ok").textContent = number;
  
}

function stop() {

   number = 0;
   document.getElementById("ok").textContent = number;

    }
    
function decrease() {

    number--;
    document.getElementById("ok").textContent = number;
        
    }
        






