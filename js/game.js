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
    handleInteraction () {

    }
    removeLife () {

    }
    checkForWin () {

    }
    gameOver () {

    }
    startGame () {
        let phraseObj = new Phrase ()
        let newPhrase = this.getRandomPhrase()
        
    }

}