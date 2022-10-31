 //Fuction for the register form for players to register for new game releases
 
//Get data
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
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
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Thank you for registering!";
    }
    
}


// clear the error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");  
}

// this will check if the email the user is entering is a valid email address
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// clear form once it has been submitted 

const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault();

    form.reset();
});