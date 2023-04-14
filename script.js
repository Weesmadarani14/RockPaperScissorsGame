// define choices and count for player and computer
const winningChoices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;


// define variables for results, playerScore, and computerScore
const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

//function to disable buttons
function disableButtons () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// play function 
function play (playerSelection) {

    // computer choice
    const computerSelection = winningChoices[Math.floor(Math.random() * winningChoices.length)];
    let result;
        
    // result of game 
if ((playerSelection === computerSelection)){
        result = "It's a tie";
} else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")  ||
    (playerSelection === "scissors" && computerSelection === "paper")
) {
    result = "You win!!!!";
    playerWins++;
} else {
    result = "Computer wins :(";
    computerWins++;
}

    // display result of game in result element
    resultElement.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;

     // display scoreboard
     document.getElementById("playerScore").textContent = `Player: ${playerWins}`;
     document.getElementById("computerScore").textContent = `Computer: ${computerWins}`;

    // scoreboard process
    if (playerWins === 5) {
        resultElement.textContent = 
        "Congratulations!! You win the game!!! Refresh page to play again.";
        disableButtons();
        return;
    } else if (computerWins === 5) {
        resultElement.textContent = 
        "Computer wins! Try again next time! Refresh page to play again.";
        disableButtons();
        return;
    }

    // result of who won the round
    document.getElementById("result").textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;

  }

    // functions for the buttons

    document.getElementById("rock").addEventListener("click", () => {
        play("rock");
      });
      
      document.getElementById("paper").addEventListener("click", () => {
        play("paper");
      });
      
      document.getElementById("scissors").addEventListener("click", () => {
        play("scissors");
      });
 
