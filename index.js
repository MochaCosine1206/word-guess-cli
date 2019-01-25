const Word = require('./word');
const inquirer = require('inquirer');
const wordArray = ["dog", "cat"];
let guessCount = 0; //should equal word length + 5
let thisWord;
let userGuess;

newWord();




function newWord(){
    thisWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(thisWord);
    guessCount = thisWord.length + 5;
    wordPrompt();
}

function wordPrompt() {
    inquirer
        .prompt([
            {
                name: "wordBlanks",
                message: "Guess a Letter! "
            },
        ]).then(function (answer) {
            userGuess = answer.wordBlanks
            setUpGame();
        })
        
}




function setUpGame() {
    if (guessCount > 0) {
        let currentGame = new Word(thisWord, userGuess);
        currentGame.setup();
        if(currentGame.boolean === true) {
            console.log("Boolean Value is: " + currentGame.boolean);
            console.log("Correct!");
            //console.log word string
        } else {
            console.log("Boolean Value is: " + currentGame.boolean);
            guessCount--
            console.log("Incorrect!");
            console.log("You have " + guessCount + " left!");
            //console.log word string
        }
        wordPrompt();
    } else {
        newWord();
    }
    
}














