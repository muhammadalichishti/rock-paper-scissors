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
  , computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a draw! Rock meets Rock.")
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a draw! Paper meets Paper.")
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a draw! Scissors meet Scissors.")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock crushes Scissors.")
        humanScore++
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Scissors are crushed by Rock.")
        computerScore++
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper covers Rock.")
        humanScore++
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock is covered by Paper.")
        computerScore++
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Paper is cut by Scissors.")
        humanScore++
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors cut Paper.")
        computerScore++
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("👨‍💼 Your Choice: " + humanSelection + "\n" + "🤖 Computer Choice: " + computerSelection);
        console.log("You won: " + humanScore + " Computer Won: " + computerScore);

    }

        if(humanScore > computerScore){
            console.log("Congratulations! You dominated the game by winning the majority of the rounds.")
        } else {
            console.log("Tough luck! You lost the majority of the games this time.")
        }
    }


    playGame()