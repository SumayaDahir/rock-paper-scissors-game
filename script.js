// Execute when the page is fully loaded
window.onload = (event) => {
    console.log("page is fully loaded");
};

// Select rock, paper, and scissors buttons from the DOM
const rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

// Event listener for the rock button
function rockOption() {
    rockBtn.addEventListener('click', (e) => {
        playRound('rock');
    });
}
rockOption();

// Event listener for the paper button
let paperOption = () => {
    paperBtn.addEventListener("click", (e) => {
        playRound("paper");
    });
};
paperOption();

// Event listener for the scissors button
let scissorsOption = () => {
    scissorsBtn.addEventListener("click", (e) => {
        playRound("scissors");
    });
};
scissorsOption();

// DOM elements for player and computer choices, and the winner update
let playerOne = document.querySelector('.player-choice');
let computer = document.querySelector('.computer-choice');
let updateWinner = document.querySelector('.play-round')

// Initial results and scores
let playerResults = 0;
let computerResults = 0;
let playerScore = document.querySelector('.playerscore');
let computerScore = document.querySelector('.computerscore');
playerScore.textContent = playerResults;
computerScore.innerHTML = `${computerResults}`;

// Number of rounds for the game
let rounds = 3;

// Function to generate random computer choice and play a round
function playRound(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    const compChoiceIndex = Math.floor(Math.random() * 3);
    computer = choices[compChoiceIndex];

    // Check if rounds are over
    if (rounds === 0) {
        alert("Game over");
        resetGame();
        return;
    }

    // Your existing game logic
    if ((playerChoice === 'rock' && computer === 'scissors') ||
        (playerChoice === 'paper' && computer === 'rock') ||
        (playerChoice === 'scissors' && computer === 'paper')) {
        updateWinner.textContent = `You win! ${playerChoice} beats ${computer}`;
        playerResults++;
    } else if (playerChoice === computer) {
        updateWinner.innerHTML = 'It\'s a tie! Try again';
    } else {
        updateWinner.innerHTML = `Sorry you lose! ${computer} beats ${playerChoice}`;
        computerResults++;
    }

    // Update scores in the DOM
    playerScore.textContent = playerResults;
    computerScore.textContent = computerResults;

    // Decrement rounds for each round played
    rounds--;
}

// Function to reset the game state
function resetGame() {
    playerResults = 0;
    computerResults = 0;
    playerScore.innerHTML = playerResults;
    computerScore.innerHTML = computerResults;
    rounds = 3; // Reset rounds for a new game
}

// Initial reset to set up the game
resetGame();
