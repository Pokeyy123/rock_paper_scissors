function getComputerChoice() {
    const elements = ["rock", "paper", "scissors"];
    return elements[Math.floor(Math.random()*elements.length)]

}

let playerScore = 0;
let computerScore = 0;



const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreDiv = document.querySelector(".score");
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.computer-score');



function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        const p = document.createElement('p');
        p.innerText = "You lose! "+ computerSelection +" beats "+ playerSelection +"!";
        scoreDiv.appendChild(p);
        computerScore++;
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        const p = document.createElement('p');
        p.innerText = "You lose! "+ computerSelection +" beats "+ playerSelection +"!";
        scoreDiv.appendChild(p);
        computerScore++;

    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        const p = document.createElement('p');
        p.innerText = "You lose! "+ computerSelection +" beats "+ playerSelection +"!";
        scoreDiv.appendChild(p);
        computerScore++;

    }else if (playerSelection == "paper" && computerSelection == "rock") {
        const p = document.createElement('p');
        p.innerText = "You win! "+ playerSelection +" beats "+ computerSelection +"!";
        scoreDiv.appendChild(p);
        playerScore++;

    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        const p = document.createElement('p');
        p.innerText = "You win! "+ playerSelection +" beats "+ computerSelection +"!";
        scoreDiv.appendChild(p);
        playerScore++;

    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        const p = document.createElement('p');
        p.innerText = "You win! "+ playerSelection +" beats "+ computerSelection +"!";
        scoreDiv.appendChild(p);
        playerScore++;

    }else if (playerSelection == computerSelection) {
        const p = document.createElement('p');
        p.innerText = `It's a tie! you both picked ${playerSelection}`;
        scoreDiv.appendChild(p);


    }
}

const playerSelection = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();

function checkForWinner(playerScore,computerScore) {
    if(playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won ${playerScore} to ${computerScore}!`; 
        scoreDiv.append(h2);
    }else if(computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You lost ${computerScore} to ${playerScore}`;
        scoreDiv.append(h2);
    }
}

const updateScores = (playerScore,computerScore) => {
    playerScoreSpan.innerText = `player: ${playerScore}`
    compScoreSpan.innerText = `computer: ${computerScore}`
} 

rockButton.addEventListener("click", () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
});

paperButton.addEventListener("click", () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore,computerScore);

});
scissorsButton.addEventListener("click", () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore,computerScore);

});


//function game() {
    


//console.log(playRound(playerSelection,computerSelection));
//game();
