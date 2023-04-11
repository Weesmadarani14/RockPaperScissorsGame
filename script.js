function play(playerMove) {
    const computerMove = getComputerMove();
    const result = getResult(playerMove, computerMove);
    displayResult(result);
  }
  
  function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }
  
  function getResult(playerMove, computerMove) {
    if (playerMove == computerMove) {
      return 'It\'s a tie!';
    } else if (
      (playerMove == 'rock' && computerMove == 'scissors') ||
      (playerMove == 'paper' && computerMove == 'rock') ||
      (playerMove == 'scissors' && computerMove == 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
  }
  