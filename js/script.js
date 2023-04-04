const moves = ["Rock", "Paper", "Scissors"];

function getRandomInteger(min, max) {
    // returns a random number with min included and max excluded
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let randomNumber = getRandomInteger(0, moves.length);
    return moves[randomNumber];
}



