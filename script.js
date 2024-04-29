function getComputerChoice(){
    let choice = Math.random()* 3;
    if (choice <= 1) {
        console.log("rock")
    } else if (choice <= 2) {
        console.log("paper")
    } else (
        console.log("scissors")
    )
    return choice;
}

console.log(getComputerChoice())