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

  // Create an array of words
  let words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "about", "all" , "also", "and", "as", "at", "be", "because", "but", "by", "can", "come", "could", "day", "do", "even", "find", "first", "for", "from","get" ,"give" ,"go" ,"have" ,"he" ,"her","here" ,"him" ,"his" ,"how" ,"I" ,"if" ,"in" ,"into" ,"it" ,"its" ,"just","know" ,"like","look" ,"make" ,"man" ,"many" ,"me" ,"more" ,"my"  ,"new" ,"no" ,"not" ,"now" ,"of" ,"on","one","only" ,"or" ,"other"  ,"our" ,"out" ,"people" ,"say" ,"see" ,"she" ,"so" ,"some" ,"take","tell","than","that","the" ,"their" ,"them" ,"then","there","these","they","thing" ,"think" ,"this" ,"those" ,"time" ,"to" ,"two" ,"up" ,"use" ,"very" ,"want" ,"way" ,"we","well","what","when"  ,"which" ,"who" ,"will" ,"with","would","year","you","your"];
  
  // shuffle the words in the array
  shuffle(words);

  // join the shuffled words to form a sentence
  testSentence.innerHTML = words.join(" ");

  // Compare typed text with test sentence
  typingArea.addEventListener("input", function() {
    if (typingArea.value === testSentence.innerHTML) {
      // Get end time
      let endTime = new Date().getTime();

      // Calculate time taken
      let timeTaken = (endTime - startTime) / 1000
      ;
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

// Function to shuffle the array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

