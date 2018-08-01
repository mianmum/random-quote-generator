// cache elements to variables
const button = document.getElementById('loadQuote');
const quoteBox = document.getElementById('quote-box');
const body = document.querySelector("body");
const corner = document.getElementById("corner");
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
button.addEventListener("click", printQuote, false);
// change background to random colour upon click
button.addEventListener("click", changeColour, false);
