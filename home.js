let testArea = document.getElementById("test-area");
let typingArea = document.getElementById("typing-area");
let timer = document.getElementById("timer");
let currentLine = 1;
let startTime;
let words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "about", "all" , "also", "and", "as", "at", "be", "because", "but", "by", "can", "come", "could", "day", "do", "even", "find", "first", "for", "from","get" ,"give" ,"go" ,"have" ,"he" ,"her","here" ,"him" ,"his" ,"how" ,"I" ,"if" ,"in" ,"into" ,"it" ,"its" ,"just","know" ,"like","look" ,"make" ,"man" ,"many" ,"me" ,"more" ,"my"  ,"new" ,"no" ,"not" ,"now" ,"of" ,"on","one","only" ,"or" ,"other"  ,"our" ,"out" ,"people" ,"say" ,"see" ,"she" ,"so" ,"some" ,"take","tell","than","that","the" ,"their" ,"them" ,"then","there","these","they","thing" ,"think" ,"this" ,"those" ,"time" ,"to" ,"two" ,"up" ,"use" ,"very" ,"want" ,"way" ,"we","well","what","when"  ,"which" ,"who" ,"will" ,"with","would","year","you","your"];
let testSentence;

// Shuffle the words array
shuffle(words);

// Create the first test sentence element
testSentence = createTestSentence();

// Append the test sentence element to the test area
testArea.appendChild(testSentence);

// Function to create a test sentence element
function createTestSentence() {
  // Create a new p element
  let sentence = document.createElement("p");

  // Set the text content of the p element
  sentence.textContent = words.join(" ");

  return sentence;
}

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to generate a new set of words
function generateNewWords() {
  // Reset the words array
  words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "about", "all" , "also", "and", "as", "at", "be", "because", "but", "by", "can", "come", "could", "day", "do", "even", "find", "first", "for", "from","get" ,"give" ,"go" ,"have" ,"he" ,"her","here" ,"him" ,"his" ,"how" ,"I" ,"if" ,"in" ,"into" ,"it" ,"its" ,"just","know" ,"like","look" ,"make" ,"man" ,"many" ,"me" ,"more" ,"my"  ,"new" ,"no" ,"not" ,"now" ,"of" ,"on","one","only" ,"or" ,"other"  ,"our" ,"out" ,"people" ,"say" ,"see" ,"she" ,"so" ,"some" ,"take","tell","than","that","the" ,"their" ,"them" ,"then","there","these","they","thing" ,"think" ,"this" ,"those" ,"time" ,"to" ,"two" ,"up" ,"use" ,"very" ,"want" ,"way" ,"we","well","what","when"  ,"which" ,"who" ,"will" ,"with","would","year","you","your"];

  // Shuffle the words array
  shuffle(words);
}

// Add a keydown event listener to the typing area
typingArea.addEventListener("keydown", function(e) {
  // Check if the user pressed the TAB key
  if (e.keyCode === 9) {
    // Stop the test
    stopTest();
  }
});

// Add an input event listener to the typing area
typingArea.addEventListener("input", function() {
  // Check if the user has typed the correct sentence
  checkSentence();
});

// Function to check if the user has typed the correct sentence
function checkSentence() {
  // Get the typed text
  let typedText = typingArea.value;

  // Get the test sentence text
  let testText = testSentence.textContent;

  // Check if the typed text matches the test sentence text
  if (typedText === testText) {
    // Check if the user has typed the first line
    if (currentLine === 1) {
      // Generate a new set of words
      generateNewWords();

      // Create a new test sentence element
      testSentence = createTestSentence();

      // Append the test sentence element to the test area
      testArea.appendChild(testSentence);
    }
  }
}

// Function to stop the test
function stopTest() {
  // Remove the input event listener
  typingArea.removeEventListener("input", function() {});

  // Hide the test area
  testArea.style.display = "none";

  // Reset the current line
  currentLine = 1;
}

// Function to reset the test
function resetTest() {
  // Generate a new set of words
  generateNewWords();

  // Create a new test sentence element
  testSentence = createTestSentence();

  // Clear the typing area
  typingArea.value = "";

  // Show the test area
  testArea.style.display = "block";

  // Append the test sentence element to the test area
  testArea.appendChild(testSentence);

  // Add an input event listener to the typing area
  typingArea.addEventListener("input", function() {
    // Check if the user has typed the correct sentence
    checkSentence();
  });
}




  


