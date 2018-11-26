class Game {
    constructor (phrases, missed) { //creates phrases which is an array that holds the games phrases and missed which holds the number of times an incorrect choice is selected
        this.phrases = phrases, 
        this.missed = missed
    }
    getRandomPhrase () { // gets a random phrase by generating a random number that selects a phrase at a certain index in the phrases property
        var min = 0;
        var max = this.phrases.length;
        return this.phrases[Math.floor(Math.random() * (max - min)) + min]; // returns an index that is within the range of the array stored within the phrases property 
    }
    handleInteraction (letter) { //calls checkletter and stores the boolean value in result this will decide if a matched letter will be shown or if a heart will be removed
        let result = phrase.checkLetter(letter);
        if (result==true) { //branching path for if the player chose right or wrong
            phrase.showMatchedLetter(letter);
            game.checkForWin();
        } else { //player chose wrong and the removeLife method is called
            game.removeLife();
        }
    }
    removeLife () { //this method removes a heart from the dom and adds 1 to the missed property
        let heart = document.getElementById('scoreboard').firstElementChild;
        this.missed +=1; //missed property is increased by one
        heart.removeChild(heart.firstElementChild); //removes a heart from the dom
        if (this.missed == 5) { //calls game over if the missed property reaches 5
            this.gameOver();
        }
    }
    checkForWin () { //this method checks each time a button is pressed to see if the game is in a win state meaning that all the letters are shown
        var hideLetter = document.getElementsByClassName('hide letter'); //this selects every letter element in the ul variable
        var check = Array.from(hideLetter).every((element) =>   { //returns true if every letter element has the show class and false if otherwise
            return element.classList.contains('show');
        })
        if (check == true) { //if true meaning every letter element has a class of show, paragraph tag with the text You Win! is created and appended to the overlay screen then the start game button is removed
            let p = document.createElement('p');
            p.innerHTML = "You Win!";
            resultMessageArea.appendChild(p);
            overlay.style.display = ''; //shows overlay screen
            overlay.removeChild(startButton);
        }
    }
    gameOver () { //this method ends the game by creating and appending a You Lose prompt to the overlay and brings up the overlay
        let p = document.createElement('p');
        p.innerHTML = "You Lose!";
        resultMessageArea.appendChild(p);
        overlay.style.display = ''; //shows overlay screen
        overlay.removeChild(startButton);
    }
    startGame () { //begins the game
        phrase = new Phrase (game.getRandomPhrase()); //initializes the Phrase object that takes a random phrase from the Game object
        phrase.addPhraseToDisplay(); //adds the phrase to the display  
    }
}