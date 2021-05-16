// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmation = document.getElementById("password-confirmation");
const terms = document.getElementById("terms");
const errorsList = document.querySelector(".errors-list");
const errorsContainer = document.querySelector(".errors");
console.log(errorsList);
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = [];
  clearErrors();
  console.log("errors cleared");
  //    TODO: Define the following validation checks with appropriate error messages

  //      1. Ensure the username is at least 6 characters long
  if (username.value.length < 6) {
    errorMessages.push("User Name must be at least 6 characters long");
  }
  //      2. Ensure the password is at least 10 characters long
  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long");
  }
  //      3. Ensure the password and confirmation password match
  if (password.value !== confirmation.value) {
    errorMessages.push("Password and confirmation must match");
  }
  //      4. Ensure the terms checkbox is checked
  if (!terms.checked) {
    errorMessages.push("Please click the terms checkbox");
  }
  console.log(errorMessages);
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length !== 0) {
    e.preventDefault();
  }

  showErrors(errorMessages);
  console.log(errorsList.children.length);
});

// TODO: Define this function
function clearErrors() {
  //   errorsList.innerHTML = "";

  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container

  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  errorsContainer.classList.remove("show");
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element

  errorMessages.forEach((error) => {
    const errorItem = document.createElement("li");
    errorItem.innerText = error;
    errorsList.append(errorItem);
  });

  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorsContainer.classList.add("show");
}
