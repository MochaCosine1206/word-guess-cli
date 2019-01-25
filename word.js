const Letter = require('./letter');


function Word(wordInPlay, userGuess) {
    this.lettersOfWord = wordInPlay.split(""); //array of letters representing the word
    this.letterArray = []; //array of Letter objects
    this.userGuess = userGuess; //user prompt answer
    this.displayString = ""; //string to display along prompt to show letters guessed and blanks
    this.matchedGuesses = []; //array to hold guesses if matching
    this.boolean = null;
    this.setup = () => {
        for (let i = 0; i < this.lettersOfWord.length; i++) {
            this.letterArray.push(new Letter(this.lettersOfWord[i], userGuess))
            if(this.letterArray[i].letter === this.userGuess) {
                this.matchedGuesses.push(this.userGuess);
                console.log("matchedGuess: " + this.matchedGuesses);
            }
        }
        this.toString();
    }
    this.toString = () => {
        console.log(this.letterArray.length)
        for (let i = 0; i < this.letterArray.length; i++) {
            this.displayString += (this.letterArray[i].isGuess() + " ");
            console.log(this.displayString);
            return this.displayString;
        }
        console.log("this is displayString: " + this.displayString);
        this.isGuessed(this.userGuess);
    }
    this.isGuessed = (userGuess) => {
        for (let i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].isCorrect(userGuess);
            console.log("If it was guessed? " + this.letterArray[i].letterGuessed)
        }
    }
}






module.exports = Word;



    // this.setup = () => {
    //     lettersOfWord = wordInPlay.split("");
    //     console.log("The letters of the word are:  " + lettersOfWord);
    //     this.display();
    // }
    // this.display = () => {
    //     for (let i = 0; i < lettersOfWord.length; i++) {
    //         if (this.matchedLetters.indexOf(this.lettersOfWord[i]) !== -1) {
    //             wordView += this.lettersOfWord[i];
    //         } else {
    //             wordView += "&nbsp;_&nbsp;";
    //         }
    //     }
    //     console.log("This is wordView in word.js: " + wordView);
    // }
    // this.letterGuesses = () => {

    //     if ((this.guessedLetters.indexOf(guess.letter) === -1) && (this.lettersOfWord.indexOf(guess.letter) === -1)) {
    //         this.guessedLetters.push(guess.letter);
    //         this.guessesLeft--;
    //         this.guessedLetters.join(", ");
    //         console.log("this is the guessed letters array in word.js: " + this.guessedLetters);
    //     }
    //     updateMatchedLetters(guess.letter);
    // }

