

/*-----
VARIABLES GO HERE
-----*/
const startButton = document.getElementById('btn__reset') // selects the startButton so that event listener can be added to it
const keyboardKey = document.getElementsByClassName("key"); //selects all keys on the keyboard so that an event listener can be attched to it
let game = '' //empty variable that will hold the game object
let phrase = '' //empty variable that will hold the phrase object
let ul = document.getElementById('phrase');


/*-----
FUNCTIONS GO HERE
-----*/
function resetDisplay() { // this function removes the overlay that is there at the beginning
    overlay = document.getElementById('overlay'); 
    overlay.style.display = 'none';
}

function markButton (keyElement) {
    keyElement.setAttribute('disabled', 'disabled'); // i think thats how you do it
    game.handleInteraction(keyElement.innerHTML) //passes the letter to handle interaction
    

}
    



/*-----
EXECUTE (INCLUDES ALL EVENT LISTENERS) 
-----*/
startButton.addEventListener('click', () => { // on click runs the below functions
    resetDisplay();  //calls the function to take down the overlay splashscreen
    game = new Game(['the dog jumped over the river', 'i like drinking sprite', 'i got a new computer'], 0) //initializes the Game object that takes array of phrases as the constructor
    game.startGame();
});

Array.from(keyboardKey).forEach(key => { //upon clicking the key on the keyboard, it becomes disabled
    key.addEventListener('click', (event) => {
        markButton(event.target);
    })});







