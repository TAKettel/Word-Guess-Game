// Need an array of possible words/phrases, and other initial variables.
var puzzles = ["allosaurus", "ankylosaurus", "compsognathus", "ceratosaurus",
    "dilophosaurus", "gallimimus", "iguanadon", "pachycephalosaurus",
    "protoceratops", "spinosaurus", "styracosaurus", "velociraptor"];
// var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var startingGuesses = 12;
var startingScore = 0;
var userGuesses = [];
var wrong = 0;
var numberOfLetters = 0;
// empty array for user guesses - push guesses in.

// Create variables that hold references to the places in the HTML
// where we want to display things.
var scoreText = document.getElementById("score");
var wrongText = document.getElementById("wrongGuesses");
var leftText = document.getElementById("guessesLeft");
var gamePuzzle = document.getElementById("puzzleSpace");

// Display some of them.
leftText.innerHTML = startingGuesses;
scoreText.innerHTML = startingScore;
wrongText.innerHTML = userGuesses;

// Pick one of however many phrases to be the puzzle.
var startGame = function() {
    console.log(puzzles)
    leftText.innerHTML = startingGuesses;
    var puzzlePick = puzzles[Math.floor(Math.random() * puzzles.length)];
    console.log(puzzlePick);
    var currentPuzzle = [];

    for (var i = 0; i < puzzlePick.length; i++) {
        currentPuzzle[i] = " _ "
        console.log(currentPuzzle);
        gamePuzzle.innerHTML = currentPuzzle.join(" ");
        //found on w3, .join(" ") to not have commas between underscores.
    };
    numberOfLetters = currentPuzzle.length;
    console.log(numberOfLetters);

    // So this is all "setting up the board" before starting the game.

    var gamePlay = function() {
    // load the puzzle into the space, using underscores in place of the letters.

    // log the keys, events and keyups and whatnot.
    document.onkeyup = function(event) {
        var guess = event.key;
        console.log(guess)
    // assign the keypress, make it all lower case.
    // go through and compare ()
        for (var j = 0; j < puzzlePick.length; j++) {
            if (puzzlePick[j] === guess) {
                console.log("yes")
                //change index position to correct letter
                currentPuzzle[j] = guess;
                console.log(currentPuzzle);
    // I Did that right, realized I needed to reprint the puzzle each time a correct letter is guessed.
                gamePuzzle.innerHTML = currentPuzzle.join(" ");
                wrong++
    // Trying to make sure the counter only clicks if it's a wrong answer.
                };
            };

            userGuesses.push(guess);
            console.log(userGuesses);
            wrongText.innerHTML = userGuesses.join(", ");           

            console.log(wrong)
            if (wrong === 0) {
    // Drop guesses by one - make sure this isn't inside the For Loop.

    // Trying to make it so that an already guessed response cannot be used twice.
//            for (var k = 0; k < userGuesses; k++) {
//                if (userGuesses[k] === guess) {
//                break;
//                };
       
    //This isn't working all that well, need to learn more about breaking loops and if/else statements.
    // Skip it, ask about it later, etc etc.

                startingGuesses--;
                leftText.innerHTML = startingGuesses;
//            };
        }
            else {
    // Reduce the number of remaining letters to reveal.
                numberOfLetters = numberOfLetters - wrong;
    // Found this on stackoverflow to reset a variable number, hope it works.
                wrong -= wrong;
                console.log(numberOfLetters);
                console.log(wrong);
            };
// check userGuess character against characters in the puzzle (NO DAMN CLUE)
// IF in puzzle, Reveal correct guesses
// if 
// ELSE, show in failed letters, knock down chances.
// else

// INSIDE THE KEYUP EVENT WATCHER.
// IF puzzle completed, congratulate, add to wins, and start new game.
if (numberOfLetters <= 0) {
    startingScore++;
    alert("Congratulations! The word was " + puzzlePick + "!");
    scoreText.innerHTML = startingScore;
    console.log(startingScore);
    startingGuesses = 12;
    userGuesses = [];
    wrongText.innerHTML = userGuesses;
    startGame()
}
// IF guessesLeft = 0, console and start new game.
if (startingGuesses <= 0) {
    alert("Better luck next time!");
    startingGuesses = 12;
    console.log(startingGuesses)
    userGuesses = [];
    wrongText.innerHTML = userGuesses;
    startGame()
};
};

};

gamePlay()
};

startGame()