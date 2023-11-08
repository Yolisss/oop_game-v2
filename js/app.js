/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.querySelector("#btn__reset");

//blueprint but no description for game class 
let game;
//console.log(startButton, 'button');

startButton.addEventListener('click', (e)=>{
//w new Game() as value, it's allowing us to access game class
        game = new Game();
        //accessing startGame within game class
        game.startGame();
})
//add a click event to keyboard buttons to handle interactions
document.querySelector('#qwerty').addEventListener('click', (event) =>{
    if (event.target.className === 'key') {
      game.handleInteraction(event.target);  
    }
})

