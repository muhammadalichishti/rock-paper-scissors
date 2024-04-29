function getComputerChoice(){
    let computerChoice = Math.random()* 3;
    if (computerChoice <= 1) {
        console.log("rock")
    } else if (computerChoice <= 2) {
        console.log("paper")
    } else (
        console.log("scissors")
    )
    return computerChoice;
}

console.log(getComputerChoice())


function getHumanChoice() {
    let humanChoice = prompt("Choice One", "");
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
        console.log("Right!")
    } else {
        console.log("Please write only 'rock', 'paper', 'scissors'")
    }
    return humanChoice
}

console.log(getHumanChoice())