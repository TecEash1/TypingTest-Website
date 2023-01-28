const textToType = document.getElementById("text-to-type");
const typingArea = document.getElementById("typing-area");
const time = document.getElementById("time");
const mistakes = document.getElementById("mistakes");
const wpm = document.getElementById("wpm");
const cpm = document.getElementById("cpm");
const tryAgainBtn = document.getElementById("try-again-btn");

// Variables to keep track of the game
let startTime;
let totalTime = 60; // max time for typing in seconds
let intervalId;
let mistakesCount = 0;
let charactersTyped = 0;

// Function to generate a new paragraph for the user to type
function generateNewParagraph() {
    // replace this with your own array of paragraphs or some api call to fetch paragraphs
    const paragraphs = [
        "The quick brown fox jumps over the lazy dog.", 
        "Once upon a time, in a land far far away."
    ];
    // Select a random paragraph from the array
    const paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    textToType.innerText = paragraph;
}

// Function to start the game
function startGame() {
    // Clear any existing interval
    clearInterval(intervalId);
    // Generate a new paragraph
    generateNewParagraph();
    // Clear the typing area
    typingArea.value = "";
    // Set the focus to the typing area
    typingArea.focus();
    // Reset the mistakes count
    mistakesCount = 0;
    mistakes.innerText = mistakesCount;
    // Reset the characters typed count
    charactersTyped = 0;
    // Get the current time
    startTime = Date.now();
    // Set an interval to update the time remaining every second
    intervalId = setInterval(updateTime, 1000);
}

// Function to update the time remaining
function updateTime() {
    // Calculate the time remaining
    const elapsedTime = Date.now() - startTime;
    const remainingTime = totalTime - (elapsedTime / 1000);
    // Update the time element
    time.innerText = remainingTime.toFixed(2);
    // If the time is up
    if (remainingTime <= 0) {
        // Stop the interval
        clearInterval(intervalId);
        // Calculate and display the WPM and CPM
        wpm.innerText = ((charactersTyped / 5) / (totalTime / 60)).toFixed(2);
        cpm.innerText = (charactersTyped / (totalTime / 60)).toFixed(2);
        // Disable the typing area
        typingArea.disabled = true;
    }
}

// Event listener for the typing area
typingArea.addEventListener("input", function() {
    // Get the text typed by the user
    const text = typingArea.value;
    // Get the text to type
    const textToTypeText = textToType.innerText;
    // Compare the text typed by the user with the text to type
    for (let i = 0; i < text.length; i++) {
        // If the character is incorrect
        if (text[i] !== textToTypeText[i]) {
            // Increment the mistakes count
            mistakesCount++;
            mistakes.innerText = mistakesCount;
        }
    }
    // Update the characters typed count
    charactersTyped = text.length;
});

// Event listener for the try again button
tryAgainBtn.addEventListener("click", startGame);

// Start the game when the page loads
startGame();




  


