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
        "the cat sat on the mat and licked its paw while staring at the dog across the room who was barking at the window",
        "the sun was shining brightly on the field of flowers as the butterflies fluttered around collecting nectar from the blooms",
        "the boy ran through the streets with a bag of candy in his hand and a smile on his face as he thought about the fun he would have later",
        "the girl sat on the swing and kicked her feet back and forth while singing a song she had just learned in school",
        "the man walked down the busy street with a determined look on his face as he searched for the perfect gift for his wife",
        "the river flowed peacefully through the valley as the fish swam and the birds sang in the trees above",
        "the car drove down the winding road as the driver listened to music and enjoyed the beautiful scenery",
        "the dog chased the ball across the park as the children laughed and played on the playground",
        "the rain fell gently from the sky as the flowers opened and the grass grew taller",
        "the horse galloped across the open field as the rider held on tightly and felt the wind in her hair",
        "the train chugged along the tracks as the passengers sat and read their books or looked out the window",
        "the airplane soared through the clouds as the pilot checked his instruments and prepared for landing",
        "the boat sailed across the sea as the crew worked together to navigate the waves and reach their destination",
        "the bird perched on the branch and sang a beautiful song as the leaves rustled in the breeze",
        "the mouse scurried across the floor as the cat watched and waited for the right moment to pounce",
        "the fire crackled and danced in the fireplace as the family sat and talked and laughed",
        "the star twinkled in the night sky as the astronaut looked up and thought about the vastness of space",
        "the mountain stood tall and majestic as the hiker climbed to the summit and looked out at the view",
        "the clock ticked and tocked as the students sat and listened to the teacher's lesson",
        "the moon shone brightly in the sky as the night owl hooted and the owl flew silently through the darkness."
    ];
    // Select a random paragraph from the array
    const paragraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    textToType.innerHTML = "";
    for (let i = 0; i < paragraph.length; i++) {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = paragraph[i];
        textToType.appendChild(characterSpan);
    }
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
    // Reset the color of the characters
    const characters = textToType.getElementsByTagName("span");
    for (let i = 0; i < characters.length; i++) {
        characters[i].style.color = "black";
        console.log("black??")

    }
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
        }
    }
    
    // Function to handle changes in the typing area
    let lastCorrectIndex = -1;

    // Function to handle changes in the typing area
    function handleTypingAreaChange(event) {
        // Get the current value of the typing area
        const value = event.target.value;
        // Get the characters in the text to type
        const characters = textToType.getElementsByTagName("span");
        // Loop through the characters starting from the lastCorrectIndex + 1
        for (let i = lastCorrectIndex + 1; i < characters.length; i++) {
            // If the current index is greater than the length of the value string, exit the loop
            if (i >= value.length) {
                break;
            }
            // If the character has been typed correctly
            if (value[i] === characters[i].innerText) {
                // Color the character green
                characters[i].style.color = "green";
                // Update the lastCorrectIndex
                lastCorrectIndex = i;
                // Increment the characters typed count
                charactersTyped++;
            } else {
                // Color the character red
                characters[i].style.color = "red";
                // Increment the mistakes count
                mistakesCount++;
                // Update the mistakes element
                mistakes.innerText = mistakesCount;
            }
        }
    }
    
    // Start the game when the page loads
    startGame();
    
    // Add an event listener to the typing area
    typingArea.addEventListener("input", handleTypingAreaChange);
    
    // Add an event listener to the try again button
    tryAgainBtn.addEventListener("click", startGame);




  


