// Prompt the user to choose his hand
function getPlayerChoice() {
    let hand = prompt("Which do you choose, Rock, Paper or Scissors?").toLowerCase()
    return hand
}


// Choose a random hand for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'] 
    return choices[Math.floor(Math.random() * choices.length)]
}    


// Play a single round of game, comparein players hand with computers and declare a winner/tie
function playRound(playerSelection, computerSelection) {
    
    // If player chose rock
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose, Paper beats Rock!";
        } else if(computerSelection === "scissors") {
            return "You win, Rock beats Scissors!";
        } else {
            return "It's a tie!";
        }

    // If player chose paper
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose, Scissors beat Paper!";
        } else if(computerSelection === "rock") {
            return "You win, Paper beats Rock!";
        } else {
            return "It's a tie!";
        }
    
    // If player chose scissors
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose, Rock beats Scissors!";
        } else if(computerSelection === "paper") {
            return "You win, Scissors beat Paper!";
        } else {
            return "It's a tie!";
        }
    }
}


// Play a game of 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }
}
