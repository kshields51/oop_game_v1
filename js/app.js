

/*-----
VARIABLES GO HERE
-----*/
const startButton = document.getElementById('btn__reset') // selects the startButton so that event listener can be added to it
const keyboardKey = document.getElementsByClassName("key"); //selects all keys on the keyboard so that an event listener can be attched to it
let game = '' //empty variable that will hold the game object
let phrase = '' //empty variable that will hold the phrase object

/*-----
FUNCTIONS GO HERE
-----*/
function resetDisplay() { // this function removes the overlay that is there at the beginning
    overlay = document.getElementById('overlay'); 
    overlay.style.display = 'none';
}

function createGame() { //this function initializes both the Phrase and Game objects 
    game = new Game(['the dog jumped over the river', 'i like drinking sprite', 'i got a new computer'], 0) //initializes the Game object that takes array of phrases as the constructor
    phrase = new Phrase (game.getRandomPhrase()) //initializes the Phrase object that takes a random phrase from the Game object
    phrase.addPhraseToDisplay(); //adds the phrase to the display
}
function markButton (keyElement) {
    keyElement.setAttribute('disabled', 'disabled'); // i think thats how you do it

}
    



/*-----
EXECUTE (INCLUDES ALL EVENT LISTENERS) 
-----*/
startButton.addEventListener('click', () => { // on click runs the below functions
resetDisplay();  //calls the function to take down the overlay splashscreen
createGame(); //calls the function that initializes the Phrase and Game Objects
});

Array.from(keyboardKey).forEach(key => { //upon clicking the key on the keyboard, it becomes disabled
    key.addEventListener('click', (event) => {
        markButton(event.target);
        // key.setAttribute('disabled', 'disabled') // i think thats how you do it
    })});


console.log('hello');
console.log(game);




