// declare the constants for the DOM elements and what choices the player has

const buttons = document.getElementsByClassName("controls-area");
const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");
const yourImage = document.getElementById("your-image");
const computerImage = document.getElementById("computer-image");
const choices = ["Rock", "Paper", "Scissors"];


// event listener to all buttons on the page

for (let button of buttons) {
    button.addEventListener("click", function() {
        let yourChoice = this.getAttribute("data-choice");
        playGame(yourChoice);
    });
}

