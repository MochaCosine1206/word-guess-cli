const Letter = require('./letter');

function Word(wordInPlay) {
    this.lettersOfWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft;
    this.setup = () => {
        lettersOfWord = wordInPlay.split("");
        console.log("The letters of the word are:  " + lettersOfWord);
        this.letterGuesses();
    }
    this.letterGuesses = () => {
        let guess = new Letter();
        
        if ((this.guessedLetters.indexOf(guess.letter) === -1) && (this.lettersOfWord.indexOf(guess.letter) === -1)) {
            this.guessedLetters.push(guess.letter);
            this.guessesLeft--;
            this.guessedLetters.join(", ");
            console.log("this is the guessed letters array in word.js: " + this.guessedLetters);
        }
        updateMatchedLetters(guess.letter);
    }
    this.updateMatchedLetters = (letter) => {
        for (let i = 0; i < this.lettersOfWord.length; i++) {
            if ((letter === this.lettersOfWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }
        this.display();
    }

    this.display = () => {
        let wordView = "";
        for (let i = 0; i < this.lettersOfWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfWord[i]) !== -1) {
                wordView += this.lettersOfWord[i];
            } else {
                wordView += "&nbsp;_&nbsp;";
            }
        }
        console.log("This is wordView in word.js: " + wordView);
    }
}






module.exports = Word;