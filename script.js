// Initiate the score, get the scoreboard
let playerScore = 0;
let computerScore = 0;
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const computer_display = document.querySelector('#computer-move-display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Play a round when any button is clicked
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.getAttribute('id'), getComputerChoice());
  })
});

// Play a single round and update the scoreboard. Announce winner if someone gets 5 victories
function playRound(playerSelection, computerSelection) {

  // Player wins
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'rock') ||
  (playerSelection === 'scissors' && computerSelection === "paper")) {

    // Update DOM elements
    player.textContent = `You: ${++playerScore}`;
    document.querySelector('#roundResult').textContent = `You won the round! Computer got ${computerSelection}.`;

    if (playerScore === 3) {
      alert(`You won the game ${playerScore}:${computerScore}!`);
      location.reload();
    }
  }

  // Player loses
  else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
  (playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === "rock")) {

    // Update DOM elements
    computer.textContent = `Computer: ${++computerScore}`;
    document.querySelector('#roundResult').textContent = `You lost the round. Computer got ${computerSelection}.`;

    if (computerScore === 5) {
      alert(`You lost ${playerScore}:${computerScore}! Computer wins the game.`);
      location.reload();
    }
  }

  // A tie
  else {
    document.querySelector('#roundResult').textContent = `A tie! Computer got ${computerSelection}.`;
  }

}

// Choose a random hand for the computer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
