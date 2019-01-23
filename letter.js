const inquirer = require('inquirer');
wordPrompt();



function wordPrompt() {
    inquirer
        .prompt([
            {
                name: "wordBlanks",
                message: "Guess a Letter! "
            },
        ]).then(function (answer) {
            let letter = new Letter(answer.wordBlanks);
                console.log(letter.letter);
                console.log(letter.checkGuess());
        })
}

function Letter(letter) {
    this.letter = letter;
    this.guessedLetter = [];
    this.letterGuessed = null;
    this.checkGuess = () => {
        this.guessedLetter.push(letter);
        console.log(this.guessedLetter);
        console.log("Your letter is: " + this.letter);
    };

}

module.exports = Letter;