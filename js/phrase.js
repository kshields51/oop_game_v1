class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
        //seems like this has no properties so do you just leave this section blank? is this the properties section?


    }
    addPhraseToDisplay () {
        Array.from(this.phrase).forEach(letter => {
            let ul = document.getElementById('phrase');
            let hiddenLetter = letter;
            let li = document.createElement('li');
            if (hiddenLetter !== ' ') {
                li.classList.add('hide', 'letter', `${hiddenLetter}`);
            } else {
                li.classList.add('hide', 'space');
            }
            
            li.innerHTML = `${letter}`;
            ul.appendChild(li);

        });
    }
    checkLetter () {

    }
    showMatchedLetter () {

    }

}