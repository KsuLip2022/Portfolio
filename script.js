
"use strict";
// CONTACT ME
function valOnSubmit(e){
  // Prevent default form submission
  e.preventDefault();

  let myForm = document.querySelector("#contactForm");

  // Errors
  let nameError = document.getElementById("nameError");
  let phoneError = document.getElementById("phoneError");
  let emailError = document.getElementById("emailError");
  let commentsError = document.getElementById("commentsError");
  let methodError = document.getElementById("methodError");

  let isValid = true;

  // Reset of the error inputs before test
  myForm.fullName.classList.remove("errorInput");
  myForm.phone.classList.remove("errorInput");
  myForm.email.classList.remove("errorInput");
  myForm.comments.classList.remove("errorInput");

  // Error message spans
  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  commentsError.textContent = "";
  methodError.textContent = "";

  // Hide the success area
  let successMessage = document.getElementById("successMessage");
  successMessage.textContent = "";
  successMessage.classList.remove("success-box");

  // Regular expressions Regex
  let fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/; 
  let phoneRegex = /^\s*(?:\+?1[-.\s]?)?(?:\(?[0-9]{3}\)?[-.\s]?)[0-9]{3}[-.\s]?[0-9]{4}\s*$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

  // Get values
  let nameVal = myForm.fullName.value.trim();
  let phoneVal = myForm.phone.value.trim();
  let emailVal = myForm.email.value.trim();
  let commentsVal = myForm.comments.value.trim();
  let selectedMethodInput = document.querySelector("input[name='contactMethod']:checked");

  // Full name test
  if (nameVal === "") {
    myForm.fullName.classList.add("errorInput");
    nameError.textContent = "Missing full name.";
    isValid = false;
  } else if (!fullNameRegex.test(nameVal)) {
    myForm.fullName.classList.add("errorInput");
    nameError.textContent = "Enter a full name, please.";
    isValid = false;
  }

  // Comments test
  if (commentsVal === "") {
    myForm.comments.classList.add("errorInput");
    commentsError.textContent = "Comments are required.";
    isValid = false;
  }

  // Contact method test phone or email
  if (!selectedMethodInput) {
    methodError.textContent = "Please choose a preferred contact method.";
    isValid = false;
  } else {
    var method = selectedMethodInput.value;
    if (method === "phone") {
      if (phoneVal === "") {
        myForm.phone.classList.add("errorInput");
        phoneError.textContent = "Phone is required when you select contact by phone.";
        isValid = false;
      } else if (!phoneRegex.test(phoneVal)) {
        myForm.phone.classList.add("errorInput");
        phoneError.textContent = "Enter a valid US phone number (10 digits).";
        isValid = false;
      }
    } else if (method === "email") {
      if (emailVal === "") {
        myForm.email.classList.add("errorInput");
        emailError.textContent = "Missing email address.";
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        myForm.email.classList.add("errorInput");
        emailError.textContent = "Invalid or missing email address.";
        isValid = false;
      }
    }
  }


  // Success and reset
if (isValid) {
  var methodLabel = (selectedMethodInput.value === "phone") ? "Phone" : "Email";
  var contactDetail = (selectedMethodInput.value === "phone")
    ? "We will call: " + phoneVal
    : "We will email you: " + emailVal;

  successMessage.textContent =
    "Thank you, " + nameVal + ". We received your message.\n\n" +
    "Preferred contact: " + methodLabel + "\n" +
    contactDetail + "\n\n" +
    "Your comment: " + commentsVal;

  successMessage.classList.add("success-box");
  
  // emailjs.send("service_q1d0nbg", "template_bz11edf", {
  //   fullName: nameVal,
  //   phone: phoneVal,
  //   email: emailVal,
  //   comments: commentsVal,
  //   contactMethod: methodLabel,
  //   submittedAt: new Date().toISOString()
  // }).then(function(response) {
  //   console.log("SUCCESS!", response.status, response.text);
  // }, function(error) {
  //   console.log("FAILED...", error);
  // });

  
  myForm.reset();
}

}

document.addEventListener("DOMContentLoaded", function(){
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", valOnSubmit);
  }
});


// GAME
// We need to generate random numbers, or the game won’t work.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameProject(){
	//Two spans where we'll display the numbers, and the one for the message
  let dieDisplay1 = document.getElementById("random1");
  let dieDisplay2 = document.getElementById("random2");
  let gameMessage = document.getElementById("gameMsg");
  
  //generate two random numbers between 1 and six (like rolling dice)
  let die1 = getRandomNumber(1, 6);
  let die2 = getRandomNumber(1, 6);
	
  //display those numbers to the screen
  dieDisplay1.innerHTML = die1;
	dieDisplay2.innerHTML = die2;
  
  //see if they match, then display winning message
 if(die1 === 1 && die2 === 1){
	 gameMessage.innerHTML = "The numbers matched! You Win!";
 }else{
	 gameMessage.innerHTML = "Sorry, the numbers didn't match. Don't give up! Try Again and you'll do sooner or later this project!!!";
 }
}
//for the game, important - We connect the button to the code so that the numbers start running.
document.getElementById("gamePlay").addEventListener("click", gameProject);


// SHOPPING
// first, let's create some global variables to track validity of the inputs in the form
let productIsValid = false;

// now let's get the inputs as global variables that we'll need access to in multiple functions
// the four radios
let perfumeProjects = document.getElementById("perfumeProjects");
let photoProjects = document.getElementById("photoProjects");
let videoProjects = document.getElementById("videoProjects");
let artProjects = document.getElementById("artProjects");

// The span where we need to display the products
let productsSpan = document.getElementById("product");


// We can also display a message when they change the radio button that is currently selected. One is checked by default on page load (by adding the checked attribute to the HTML). We will display the user's current choice to them in the form when the change it, but nothing will load on the page by default
function displayProducts(){
	//determine which radio is selected and display the correct product in the span based on the choice
	if(perfumeProjects.checked){
		productsSpan.textContent = "You have chosen: Perfume Project";
		productIsValid = perfumeProjects.checked;
}
	if(photoProjects.checked){
		productsSpan.textContent = "You have chosen: Photo Project";
		productIsValid = photoProjects.checked;
}
  if(videoProjects.checked){
		productsSpan.textContent = "You have chosen: Video Project";
		productIsValid = videoProjects.checked;
}
  if(artProjects.checked){
		productsSpan.textContent = "You have chosen: Art Project";
		productIsValid = artProjects.checked;
}
}

// We still need to handle the form submission though, so let's also write that function
function validateChangedForm(e){
	// prevent default form submission
	e.preventDefault();
	
	// get the paragraph for output
	let output = document.getElementById("confirm");
	
	//clear out any previous output
	output.innerHTML = "";
	
	// check for validity on the four global variables, if they are both true, the form is valid and we can submit and display success to the user, if not, display appropriate error messages
	if(productIsValid == false){
	displayProducts();
	 }
	
	// Success!
	if(productIsValid)	{
		//tell the user that they have good taste!
			if(perfumeProjects.checked){
			output.innerHTML = "Thank you! Perfume pictures - You have great choice!"
		}
      if(photoProjects.checked){
			output.innerHTML = "Thank you! Photo - You have great choice!"
		}
      if(videoProjects.checked){
			output.innerHTML = "Thank you! Video - You have great choice!"
		}
      if(artProjects.checked){
			output.innerHTML = "Thank you! Art - You have great choice!"
		}
		}
    
    
		//Clear the form/reset
      perfumeProjects.checked = false;
      photoProjects.checked = false;
      videoProjects.checked = false;
      artProjects.checked = false;
      productsSpan.textContent = "";
      productIsValid = false;
	
}

// radio buttons
let productsRadios = document.querySelectorAll("input[type=\"radio\"]");
for(let radio of productsRadios){
radio.addEventListener("change", displayProducts);
}
//Submit button
document.getElementById("productsSubmit").addEventListener("click", validateChangedForm);






























