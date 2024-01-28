let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

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

    updateScoreElement();

    document.querySelector('.js-result').
        innerHTML = result;

    document.querySelector('.js-moves').innerHTML
        = `You picked ${playerMove}. Computer picked ${computerMove}.`
}

function updateScoreElement() {
    document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
    }

}

function calculateTotal() {
   const inputElement = document.querySelector('.js-cost-input');
   let cost = Number(inputElement.value);

   if (cost < 40) {
    cost = cost + 10;
   }

   document.querySelector('.js-total-cost').
    innerHTML = `$${cost}`;
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}