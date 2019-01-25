
let userGuess;
let blank = "_";


function Letter(letter, userGuess) {
    this.letter = letter;
    this.userGuess = userGuess;
    this.letterGuessed = null;
    this.isGuess = function() {
        if(this.userGuess === this.letter) {
            return letter;
        } else {
            return blank;
        }
    }
    this.isCorrect = function(char) {
        if(char === this.letter) {
            this.letterGuessed = true;
            // console.log(this.letterGuessed);
        } else {
            this.letterGuessed = false;
            // console.log(this.letterGuessed);
        }
    }
}


module.exports = Letter;

