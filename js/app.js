/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//creating instances of phrase and game 
//outcome of phrase and game 
//const phrase = new Phrase("Fish are friends, not food");
//const game = new Game();
const game = new Game();
game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();

game.phrases.forEach((phrase, index) =>{
    //phrase reps object {phrase: ""}
    //ASK FOR CLARIFICATION     
    //game.phrases is giving us access to class game 
    //then grabbing phrases property
    //within the property for each PHRASE (orange), grab property phrase 
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
})
//ASK VLAD
//removed the string "fish are friends, not food" but got error msg 
//toLowerCase undefined.. why? 

//phrase.addPhraseToDisplay();


// console.log(game.getRandomPhrase());
// console.log(game.getRandomPhrase());
// console.log(game.getRandomPhrase());




//console.log(phrase); 
//prints actual object {'fish are friends, not food'}
//console.log(phrase.phrase);
//prints out actual html (text) => fish are friends, not food