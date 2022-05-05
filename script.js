const buttons = document.querySelectorAll('.guess');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
const replay = document.querySelector('.replay');
const message = document.querySelector('.message');
const results = document.querySelector('.results');
replay.addEventListener('click', () => resetGame());

let userScore = 0;
let computerScore = 0;



function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        message.textContent = ("It's a tie.")
        return;
    }
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            message.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            message.textContent = (`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            message.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            message.textContent = (`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        }
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            message.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            message.textContent = (`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        } 
    }
}

function gameWon() {
    buttons.forEach(button => button.disabled = true);
    if (userScore > computerScore) winner.textContent = `Player wins the game!`;
    else winner.textContent = `Computer wins the game!`;
}

function updateResult(result) {
    if (result === true) {
        userScore += 1;
    }
    else if (result === false) {
        computerScore += 1;
    }
    score.textContent = `You: ${userScore}  Computer: ${computerScore}`;
    if (userScore === 5 || computerScore === 5) gameWon();
}

function Game() {
    buttons.forEach(button => button.addEventListener('click', () => {
        let result = playRound(button.textContent);
        updateResult(result);
        changeColor(result);
    }));
    
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    score.textContent = `You: ${userScore}  Computer: ${computerScore}`;
    winner.textContent = ``;
    message.textContent = ``;
    buttons.forEach(button => button.disabled = false);
}

function changeColor(result) {
    if (result === true) {
        results.classList.add('win');
    }
    else if (result === false) {
        results.classList.add('lose');
    }
    else {
        results.classList.add('tie');
    }
    results.addEventListener('transitionend', removeTransition);
}

function removeTransition() {
    this.classList.remove('win', 'lose', 'tie');
}

Game();