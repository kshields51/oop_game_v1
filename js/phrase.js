class Phrase {
    constructor (phrase) {//creates Phrase object which has a phrase property which is used to create the boxes which contain the hidden letters
        this.phrase = phrase;
    }
    addPhraseToDisplay () { //for each loop that loops though each letter in the phrase string and adds it to then dom
        Array.from(this.phrase).forEach(letter => {
            let hiddenLetter = letter;
            let li = document.createElement('li');
            if (hiddenLetter !== ' ') { //for all nonspace characters
                li.classList.add('hide', 'letter', `${hiddenLetter}`); // adds the classes of hide and letter for letters in the string
            } else {
                li.classList.add('hide', 'space'); // adds the classes of hide and space for spaces in the string
            }
            li.innerHTML = `${letter}`; //sets the text of the element to the letter
            ul.appendChild(li); //appends the element containing the letter to the dom
        });
    }
    checkLetter (letter) { // method that checks if what the player chose matches a character in the phrase
        var chosenLetter = letter;
        var realMatch = phrase.phrase;
        if (realMatch.includes(chosenLetter)) { //returns true if letter is in the phrase
            console.log('here is a match')
            return true
        }
    }
    showMatchedLetter (letter) { //takes in the clicked letter as a parameter
        var chosenLetter = letter; // declares the letter into a variable
        Array.from(ul.children).forEach(box => { //this for each compares whether the clicked letter matches one in the box and if it does it reveals the letter in the box
        var letterInBox = box.textContent;
        if(chosenLetter === letterInBox) {
            box.classList.add('show'); //adds the show class which reveals the letter
        }
        });
    }
}