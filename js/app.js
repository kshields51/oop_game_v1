

/*-----
VARIABLES GO HERE
-----*/
const startButton = document.getElementById('btn__reset')

/*-----
FUNCTIONS/EVENT LISTENERS GO HERE 
-----*/
function resetDisplay() {
    overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

startButton.addEventListener('click', () => {
resetDisplay();  //calls the function to take down the overlay splashscreen
const game = new Game (phrase, 0)
return game

});

/*-----
EXECUTE
-----*/
console.log('hello')

