class Game {
    constructor (phrases, missed) {
        this.phrases = phrases,
        this.missed = missed
    }
    getRandomPhrase () {
        var min = 0
        var max = this.phrases.length
        return this.phrases[Math.floor(Math.random() * (max - min)) + min] // returns an index that is within the range of the array stored within the phrases property 


    }
    handleInteraction (letter) {
        let result = phrase.checkLetter(letter) //this is for typing
        if (result==true) {
            console.log('true')
            phrase.showMatchedLetter();
            game.checkForWin();
        } else {
            console.log('false')
            game.removeLife();
        }
        


    }
    removeLife () { //this method removes a heart from the dom and adds 1 to the missed property
        let heart = document.getElementById('scoreboard').firstElementChild;
        this.missed +=1;
        heart.removeChild(heart.firstElementChild);
        

    }
    checkForWin () {

    }
    gameOver () {

    }
    startGame () {
        phrase = new Phrase (game.getRandomPhrase()) //initializes the Phrase object that takes a random phrase from the Game object
        phrase.addPhraseToDisplay(); //adds the phrase to the display
        

        
    }

}