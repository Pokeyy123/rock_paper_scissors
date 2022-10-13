function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! Paper beats rock!");
    }
}

function game() {
    for (let i = 0, i )
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
