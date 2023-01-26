// Get elements
const testArea = document.getElementById("test-area");
const testSentence = document.getElementById("test-sentence");
const typingArea = document.getElementById("typing-area");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timer = document.getElementById("timer");

// Hide the test area on page load
testArea.style.display = "none";

// Add event listener to start button
startButton.addEventListener("click", startTest);

// Add event listener to reset button
resetButton.addEventListener("click", resetTest);

// Function to start the test
function startTest() {
  // Show the test area
  testArea.style.display = "block";

  // Get start time
  let startTime = new Date().getTime();

  // Compare typed text with test sentence
  typingArea.addEventListener("input", function() {
    if (typingArea.value === testSentence.innerHTML) {
      // Get end time
      let endTime = new Date().getTime();

      // Calculate time taken
      let timeTaken = (endTime - startTime) / 1000;

      // Show time taken
      timer.innerHTML = "Time taken: " + timeTaken + " seconds";
    }
  });
}

// Function to reset the test
function resetTest() {
  // Hide the test area
  testArea.style.display = "none";

  // Clear the text in the typing area
  typingArea.value = "";

  // Clear the timer
  timer.innerHTML = "";
}
