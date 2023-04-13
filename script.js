const winningChoices = ["rock", "paper", "scissors"];
const resultElement = document.getElementById("result");
let playerWins = 0;
let computerWins = 0;


function play (playerSelection) {

        const computerSelection = winningChoices [Math.floor(Math.random() * winningChoices.length)];
        let result;

    if (
        (playerSelection === computerSelection) 
        )
    {
        result = "It's a tie";
    }
        
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")  ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) 
    {
        result = "You win!!!!";
    }
    else {
        result = "Computer wins :(";
    }

    

    if (playerWins === 5) {
        resultElement.textContent = "Congratulations!! You win the game!!! Refresh page to play again.";
    }
    else if (computerWins === 5) {
        resultElement.textContent = "Computer wins! Try again next time! Refresh page to play again."
    }

    document.getElementById("result").textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
    resultElement.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
  }

    
    document.getElementById("rock").addEventListener("click", () => {
        play("rock");
      });
      
      document.getElementById("paper").addEventListener("click", () => {
        play("paper");
      });
      
      document.getElementById("scissors").addEventListener("click", () => {
        play("scissors");
      });
 


      