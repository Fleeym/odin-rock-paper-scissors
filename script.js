"use strict";

function randomRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function computerPlay() {
    let choice = randomRange(1, 3);
    let choiceString;
    switch (choice) {
        case 1:
            choiceString = 'Rock';
            break;
        case 2:
            choiceString = 'Paper';
            break;
        case 3:
            choiceString = 'Scissors';
            break;
        default:
            console.error("Computer choice not between 1 and 3.");
    }
    return choiceString;
}

function playGame(playerChoice, computerChoice) {
    let winner;
    switch (playerChoice) {
        case 'Rock':
            if(computerChoice === 'Paper') {
                winner = 2;
            } else if (computerChoice === 'Rock') {
                winner = 0;
            } else {
                winner = 1;
            }
            break;
        case 'Paper':
            if(computerChoice === 'Scissors') {
                winner = 2;
            } else if(computerChoice === 'Rock') {
                winner = 1;
            } else {
                winner = 0;
            }
            break;
        case 'Scissors':
            if(computerChoice === 'Rock') {
                winner = 2;
            } else if(computerChoice === 'Paper') {
                winner = 1;
            } else {
                winner = 0;
            }
            break;
        default:
            console.error("Player choice invalid!");
    }
    return winner;
}

function play() {
    let playCount = 5;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = 'Rock';
        let computerChoice = computerPlay();
        console.log(`The player chose ${playerChoice}`);
        console.log(`The computer chose ${computerChoice}`);
        let result = playGame(playerChoice, computerChoice);
        if (result === 1) {
            playerScore++;
            console.log("The player wins this round!");
            console.log(`The score is: ${playerScore} - ${computerScore}`);
        } else if (result === 2) {
            computerScore++;
            console.log("The computer wins!");
            console.log(`The score is: ${playerScore} - ${computerScore}`);
        } else {
            console.log("It's a draw!");
            console.log(`The score is: ${playerScore} - ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log("The player wins the game!");
    } else if (computerScore > playerScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("It's a draw!");
    }
}

play();