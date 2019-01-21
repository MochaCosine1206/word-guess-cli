function Letter(letter, letterGuessed) {
    this.letter = letter;
    this.letterGuessed = letterGuessed;
    this.checkGuess = () => {
        console.log("Your letter is: " + this.letter);
        if (this.letter.match(/^[a-zA-Z]+$/)) {
            console.log(this.letter);
            return this.letter;
        } else {
            console.log("_");
            return "_";
        }
    };
    this.character = () => {
        //checks char against the underlying character
        //if it matches, change letterGuessed
        if (this.letter.match(/^[a-zA-Z]+$/)) {
            this.letterGuessed = true;
            console.log(this.letterGuessed);
        } else {
            this.letterGuessed = false;
            console.log(this.letterGuessed);
        }
    }
}

let a = new Letter('a', true);

a.checkGuess();
a.character();