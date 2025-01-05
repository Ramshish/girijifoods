// Get the elements by their ID
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const changeButton = document.getElementById("changeButton");

// Change the text of the title
titleElement.textContent = "Welcome to JavaScript!";

// Add an event listener to the button to change the paragraph text when clicked
changeButton.addEventListener("click", function() {
    descriptionElement.textContent = "The text has been changed!";
});
