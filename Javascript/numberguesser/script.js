let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.ceil(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
    if (userGuess >= 0 && userGuess <= 10) {
        let userDiff = getAbsoluteDistance(userGuess, secretTarget);
        let compDiff = getAbsoluteDistance(computerGuess, secretTarget);
        if (compDiff > userDiff) {
            return true;
        } else return false;
    } else alert("Enter a number between 0 and 9!");
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore ++;
            break;
        case 'computer':
            computerScore ++;
            break;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}

function getAbsoluteDistance(guess, target) {
    return Math.abs(guess - target);
}