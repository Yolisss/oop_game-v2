/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//creating instances of phrase and game 
//outcome of phrase and game 
const phrase = new Phrase("Fish are friends, not food");
const game = new Game();

game.phrases.forEach((phrase, index) =>{
    //ASK FOR CLARIFICATION     
    //game.phrases is giving us access to class game 
    //then grabbing phrases property
    //within the property for each PHRASE (orange), grab property phrase 
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
})
//ASK VLAD
//removed the string "fish are friends, not food" but got error msg 
//toLowerCase undefined.. why? 

console.log(game.getRandomPhrase());
console.log(game.getRandomPhrase());
console.log(game.getRandomPhrase());

//console.log(phrase); 
//prints actual object {'fish are friends, not food'}
//console.log(phrase.phrase);
//prints out actual html (text) => fish are friends, not food