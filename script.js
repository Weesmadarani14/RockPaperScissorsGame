// get computer to choose a random option
// return the computer value
// choose an option and have it compared to the computer choice
// tally up the score for each round won
// game goes up to whoever wins 5 rounds first
// two players: player and computer

// declare options for rock, paper, and scissors
const winningChoices = ["Rock", "Paper", "Scissors"];



// function for computer choosing randomly
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices [randomChoice]
}

// function for comparing the selections
function round (playerSelection, computerSelection) {
    if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") || 
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) 
    {
        return "You are the winner!!!"
    }
    else if (
        (playerSelection == "Rock" && computerSelection == "Rock") ||
        (playerSelection == "Paper" && computerSelection == "Paper") ||
        (playerSelection == "Scissors" && computerSelection == "Scissors")
    ) 
    {
        return "It's a tie"
    }
    else {
        return "Computer wins :("
    }
}




