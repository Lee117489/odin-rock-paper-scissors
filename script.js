console.log("Rock Paper Scissors Game!");

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie.")
        return;
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        }
        else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        } 
            
    }

}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: Rock, paper, scissors!");
        const computerSelection = computerPlay().toLowerCase();
        console.log(`Round ${i+1}!`);
        let result = playRound(playerSelection, computerSelection);
        
        if (result === true) {
            userScore += 1;
        }
        else if (result === false) {
            computerScore += 1;
        }
        
    }
    console.log("Game results:")
    console.log(`User score: ${userScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (userScore === computerScore) {
        console.log("It's a tie!")
    }
    else if (userScore > computerScore) {
        console.log("Player wins!")
    }
    else console.log("Computer wins!")
    
}

game();

