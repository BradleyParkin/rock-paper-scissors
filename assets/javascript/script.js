document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })    
    }
})

/** Run Game */

function runGame() {
    let game = Math.floor(Math.random() * 2);

}


/** Check Answer */

function checkAnswer() {

}

/** Increment Score */

function incrementScore() {

}

/** Increment Computer Score */

function incrementComputerScore() {

}

