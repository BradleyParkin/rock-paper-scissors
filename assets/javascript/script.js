const selectionButtons = document.querySelectorAll('[data-selection]');
const final = document.querySelector('[data-final]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
    {
        name: 'rock',
        ID: '✊Rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        ID: '✋Paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        ID: '✌️Scissors',
        beats: 'paper'
    },
];


// selector button below to chose which button comes first
 
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});


// function below is to where it works out which player will win, either player or computer automatically generated
 

function makeSelection(selection){
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    console.log(computerSelection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}


 //fuction here is to show the winning image below the score.
 

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.ID;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    final.after(div);
}


 //Fuction for incrementing the score of the game
 

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}


 //Fuction for the feedback form for players to pass on feedback of the game
 

//Get data
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const feedback = document.querySelector('#feedback');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

// Validate data
function validateForm(){
    
    clearMessages();
    let errorFlag = false;
    
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank"; 
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address"; 
        email.classList.add("error-border");
    }

    if(feedback.value.length < 1){
        errorNodes[2].innerText = "Please enter your feedback"; 
        feedback.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "You have submitted your feedback! Thank you!";
    }
    
}


// clear the error or success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border"); 
    feedback.classList.remove("error-border"); 
}

// this will check if the email the user is entering is a valid email address
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// clear data entered into the form once submitted

const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    form.reset();
});