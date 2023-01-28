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
        "the sky is blue and the grass is green the cat jumped over the moon and landed on a cloud the dog barked at the mailman and chased after a squirrel the boy rode his bike down the street and waved to his friends", 
        "You found an EASTER EGG... if you type it out it does not do anything at the moment",
        "the dog chased the cat down the street but the cat was too fast for the dog so the dog gave up and went home to eat its dinner while the cat sat on a fence and watched the sunset.",
        "the dog ran through the field chasing the cat with a ball in its mouth",
        "the apple fell from the tree and landed on the ground with a thud",
        "the car drove down the street with the music blasting from the speakers",
        "the girl walked down the sidewalk with her headphones on and singing",
        "the boy played video games all night and never went to bed",
        "the man stood on the corner with a sign that said will work for food'",
        "the woman sat on the bench with a book in her hand and a smile on her face",
        "the baby cried in the crib and wouldn't stop until the mother picked it up",
        "the dog barked at the mailman and chased him down the street",
        "the cat sat on the windowsill and watched the birds fly by",
        "the boy rode his bike to the park and played on the playground",
        "the girl picked flowers in the garden and put them in her hair",
        "the man worked on his car in the garage and listened to the radio",
        "the woman cooked dinner in the kitchen and sang to herself",
        "the baby crawled on the floor and grabbed at the toys",
        "the dog ran through the rain and shook water all over the floor",
        "the cat slept on the couch and purred while the dog barked",
        "the boy played with his toys and made noise until the parents yelled",
        "the girl read a story and fell asleep with the book on her chest"
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




  


