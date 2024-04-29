function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
       return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Choice One", "");
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
    } else {
        console.log("Please write only 'rock', 'paper', 'scissors'")
    }
    return humanChoice
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice;
    computerChoice = getComputerChoice;
    return humanChoice() + " " + computerChoice()
}

console.log(playRound())
