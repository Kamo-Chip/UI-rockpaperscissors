const buttons = document.querySelectorAll("input");
let compWin = 0;
let playerWin = 0;
let roundNum = 0;


const container = document.querySelector("body");
const playerScore = document.getElementsByClassName("player-score")[0];
const computerScore = document.getElementsByClassName("computer-score")[0];
const playerNum = document.createElement("span");
playerNum.textContent = 0;
playerNum.style.textAlign = "left";
playerNum.style.position = "relative";
playerNum.style.top = "40px";
playerNum.style.right = "50px";
const computerNum = document.createElement("span");
computerNum.textContent = 0;
computerNum.style.textAlign = "right";
computerNum.style.position = "relative";
computerNum.style.top = "40px";
computerNum.style.right = "70px";
playerScore.appendChild(playerNum);
computerScore.appendChild(computerNum);

const result = document.getElementById("result");
const round = document.getElementById("num-rounds");
const numRounds = document.createElement("span");
numRounds.textContent = 0;
round.appendChild(numRounds);

function playRound(){
    roundNum = numRounds.textContent;
    roundNum++;
    numRounds.textContent = roundNum;

    playerSelection = this;
    let computerSelection = computerPlay();
    switch(playerSelection){
        case document.querySelector("#rock"):
            if(computerSelection == "rock"){
            }else if(computerSelection == "paper"){
                incrC();   
            }else if(computerSelection == "scissors"){
                incrP();
            }
            break;
        case document.querySelector("#paper"):
            if(computerSelection == "paper"){ 
            }else if(computerSelection == "rock"){
                incrP();
            }else if(computerSelection == "scissors"){
                incrC();
            }
            break;
        case document.querySelector("#scissors"): 
            if(computerSelection == "scissors"){ 
            }else if(computerSelection == "paper"){
                incrP();
            }else if(computerSelection == "rock"){
                incrC();
            }
            break;
        }
}

function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let choice = parseInt(Math.random()*3);
    return options[choice];
}  

function incrP(){
    playerWin = playerNum.textContent;
    playerWin++;
    playerNum.textContent = playerWin;
}

function incrC(){
    compWin = computerNum.textContent;
    compWin++;
    computerNum.textContent = compWin;
}

function checkWin(){
    if(compWin > playerWin){
        return "You lost the game!";
    }else if(playerWin > compWin){
        return "You won the game!";
    }else if(playerWin == compWin){
        return "The game has no winner!";
    }
}

function game(){
    buttons.forEach((input) =>{
        input.addEventListener("click", playRound);
    }); 
}

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

window.onclick = function(event) {
    if(roundNum == 5){
            modal.style.display = "block";
            result.textContent = checkWin();   
    }
    if (event.target == modal){
        modal.style.display = "none";
        location.reload();
  }
}

game();


