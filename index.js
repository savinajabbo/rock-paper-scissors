
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove, compMove1, compMove2, compMove3) {
    const computerMove = pickComputerMove();

    let result = '';

    if (computerMove === compMove1) {
        result = 'You win!';
    }
    else if (computerMove === compMove2) {
        result = 'Tie.';
    }
    else if (computerMove === compMove3) {
        result = 'You lose.';
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
