function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Choice One", "").toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
    } else {
        console.log("Please write only 'rock', 'paper', 'scissors'")
    }
    return humanChoice
}

let humanScore = 0
  , computerScore = 0
  , humanWon = 0
  , computerWon = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a draw! Rock meets Rock.")
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a draw! Paper meets Paper.")
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a draw! Scissors meet Scissors.")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock crushes Scissors.")
        humanWon = humanScore + 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Scissors are crushed by Rock.")
        computerWon = computerScore + 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper covers Rock.")
        humanWon = humanScore + 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock is covered by Paper.")
        computerWon = computerScore + 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Paper is cut by Scissors.")
        humanWon = humanScore + 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors cut Paper.")
        computerWon = computerScore + 1;
    }
    console.log("You won: " + humanWon + " Computer Won: " + computerWon);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("👨‍💼 Your Choice: " + humanSelection + "\n" + "🤖 Computer Choice: " + computerSelection)