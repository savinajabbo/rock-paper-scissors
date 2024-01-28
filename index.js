let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

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

    if (result === 'You win!') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
