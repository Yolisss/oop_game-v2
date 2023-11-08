/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const button = document.querySelector("#btn__reset");

//blueprint but no description for game class 
let game;
console.log(button, 'button');

button.addEventListener('click', (e)=>{
//w new Game() as value, it's allowing us to access game class
        game = new Game();
        //accessing startGame within game class
        game.startGame();
})
