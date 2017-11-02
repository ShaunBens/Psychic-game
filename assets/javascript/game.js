// Array used by user and computer to choose from
var userChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Global Variables
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessedSoFar = [];
var gamesTotal = 0;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Grabbing user's choice and applying lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Randomly chooses a choice from the userChoice array. This is the Computer's choice.
    var computerChoice = userChoice[Math.floor(Math.random() * userChoice.length)];

    // Adds user choice to guessedSoFar array
    guessedSoFar.push(userGuess);

    // Determines which key was pressed.



    // This logic determines the outcome of the game (win/loss), and increments the appropriate number.

    if (userGuess === computerChoice) {
        //Alert that notify's the user they won and the number of guesses and guessed so far gets reset.
        alert('You Won! You and the computer both chose ' + "\"" + computerChoice + "\"");
        wins++;
        numGuesses = 9;
        guessedSoFar.length = 0;
        gamesTotal++;

    }

    else if (numGuesses <= 0) {
        //Alert that notify's the user that their gueses ran out and the game resets, and adds to your losses tally.
        alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
        numGuesses = 9;
        wins = 0;
        guessedSoFar.length = 0;
        losses++;
        gamesTotal++;
    }

    //Statement to make the losses and number of guesses counter decrease by 1
    else if (userGuess !== computerChoice) {
        numGuesses--;

    }


    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<h2>The Psychic Game!</h2>" +
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerChoice + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>Number of Guesses: " + numGuesses + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses so Far: " + guessedSoFar + "</p>" +
        "<p>Games Played: " + gamesTotal + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game1").innerHTML = html;
};
