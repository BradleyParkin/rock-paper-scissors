// declare the constants for the DOM elements and what choices the player has

const buttons = document.getElementsByClassName("controls-area");
const playerScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");
const choices = ["Rock", "Paper", "Scissors"];


// event listener to all buttons on the page

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

// function of main game

function playGame(yourChoice) {
    let computerChoice = Math.floor(Math.random() * 3);
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

