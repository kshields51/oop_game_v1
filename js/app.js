

/*-----
VARIABLES GO HERE
-----*/
const startButton = document.getElementById('btn__reset')
let game = ''

/*-----
FUNCTIONS/EVENT LISTENERS GO HERE 
-----*/
function resetDisplay() {
    overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function createGame() {
    game = new Game(['the dog jumped over the river', 'i like drinking sprite', 'i got a new computer'], 0)
    return game
    
    

}

startButton.addEventListener('click', () => {
resetDisplay();  //calls the function to take down the overlay splashscreen
createGame()

});

/*-----
EXECUTE
-----*/
console.log('hello');
console.log(game);




