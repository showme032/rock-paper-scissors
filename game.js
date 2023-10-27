// give a list of possible choices and return a random one
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'] 
    return choices[Math.floor(Math.random() * choices.length)]
}