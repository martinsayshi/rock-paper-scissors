const moves = ["Rock", "Paper", "Scissors"];
const signs = {
    "Rock": "✊",
    "Paper": "✋",
    "Scissors": "✌",
    "start": "❔"
}

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const results = document.querySelector(".result");
const playerWeapon = document.getElementById("playerWeapon");
const computerWeapon = document.getElementById("computerWeapon");

function getRandomInteger(min, max) {
    // returns a random number with min included and max excluded
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let randomNumber = getRandomInteger(0, 3);
    // return moves[randomNumber];
    return Object.keys(signs)[randomNumber];
}

function filterPlayerSelection(playerSelection) {
    const playerSelectionFiltered = playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    return playerSelectionFiltered;
}

function playRound(playerSelection, computerSelection) {
    const player = filterPlayerSelection(playerSelection);
    let message = "";
    if (player === "Rock" && computerSelection === "Scissors" || player === "Scissors" && computerSelection === "Paper" || player === "Paper" && computerSelection === "Rock") {
        message += `You win! ${player} beats ${computerSelection}`;
        score.player++;
    } else if (player === "Rock" && computerSelection === "Paper" || player === "Scissors" && computerSelection === "Rock" || player === "Paper" && computerSelection === "Scissors") {
        message += `You lose! ${computerSelection} beats ${player}`;
        score.computer++;
    } else return `It's a tie! You both picked ${player}`;

    return message;
}

function checkWinner(score) {
    if (score.player === 5) {
        results.textContent = "You won the game!";
        resetGame();
    } else if (score.computer === 5) {
        results.textContent = "You lost the game...";
        resetGame();
    }
}

function resetGame() {
    playerScore.textContent = `Player: 0`;
    computerScore.textContent=  `Computer: 0`;
    playerWeapon.textContent = signs.start;
    computerWeapon.textContent = signs.start;
    score.player = 0;
    score.computer = 0;
    // results.textContent = "Choose your weapon";
}

function updateText(playerChoice, computerChoice, winner) {
    const player = filterPlayerSelection(playerChoice);
    playerWeapon.textContent = signs[player];
    computerWeapon.textContent = signs[computerChoice];
    results.textContent = winner;
    playerScore.textContent = `Player: ${score.player}`;
    computerScore.textContent=  `Computer: ${score.computer}`;
}

function game(playerChoice) {
    const computerSelection = getComputerChoice();
    
    // Play game
    const winner = playRound(playerChoice, computerSelection);
    updateText(playerChoice, computerSelection, winner);
    checkWinner(score);
}

const score = {
    player: 0,
    computer: 0
}

let round = 0;

const buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener('click', () => game(button.id));
}


document.getElementById('year').textContent = new Date().getFullYear();
