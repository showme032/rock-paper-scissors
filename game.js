// give a list of possible choices and return a random one
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'] 
    return choices[Math.floor(Math.random() * choices.length)]
}

//play a single round of game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose, Paper beats Rock!";
        } else if(computerSelection === "scissors") {
            return "You win, Rock beats Scissors!";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose, Scissors beat Paper!"
        } else if(computerSelection === "rock") {
            return "You win, Paper beats Rock!"
        } else {
            return "It's a tie!"
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose, Rock beats Scissors!"
        } else if(computerSelection === "paper") {
            return "You win, Scissors beat Paper!"
        } else {
            return "It's a tie!"
        }
    }
}