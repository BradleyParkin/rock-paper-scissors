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