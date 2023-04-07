const moves = ["Rock", "Paper", "Scissors"];

function getRandomInteger(min, max) {
    // returns a random number with min included and max excluded
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let randomNumber = getRandomInteger(0, moves.length);
    return moves[randomNumber];
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

const score = {
    player: 0,
    computer: 0
}

let round = 1;
function game() {
    while (round <= 5) {
        // Prompt user for an input
        const playerSelection = prompt("What is your pick?");
        const computerSelection = getComputerChoice();
        // Play game
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${score.player} Computer: ${score.computer}`);
        round++;
    // add score
    // loop through it 5 times
    // show the final score
    }
}

game();
let final = score.player > score.computer ? "You won the game!" : "You lost the game :(";
console.log(final)