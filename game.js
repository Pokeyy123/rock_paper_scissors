function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! "+ computerSelection +" beats "+ playerSelection +"!");
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! "+ computerSelection +" beats "+ playerSelection +"!");
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You lose! "+ computerSelection +" beats "+ playerSelection +"!");
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! "+ playerSelection +" beats "+ computerSelection +"!");
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You lose! "+ playerSelection +" beats "+ computerSelection +"!");
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You lose! "+ playerSelection +" beats "+ computerSelection +"!");
    }else if (playerSelection == computerSelection) {
        return("It's a tie!")
    }
}

function game() {
    for (let i = 0; i < 5 ;i++ ) {
        playRound();
        console.log("player: "+playerSelection+" ,computer: "+computerSelection);
    }
}

const playerSelection = window.prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
game();
