/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0,
        this.phrases = [
            {phrase: "adventure is out there"}, 
            {phrase: "just keep swimming"},
            {phrase: "the only limit is your imagination"},
            {phrase: "Dishonor on you"},
            {phrase: "take her to the moon for me"}],
        this.activePhrase = null
    }
}



// class game{
//     constructor(){
//         this.missed = 0,
//         this.phrases = [{phrase: "Somewhere over the rainbow"},{phrase: "Hello chunky monkey"},{phrase: "I got sunshine on a cloudy day"},{phrase: "Hello world"},{phrase: "The cat in the hat"}],
//         this.activePhrase = null 
//     }
//     getRandomPhrase = function(){
//         console.log("hello world");
//         let phraseLength = this.phrases.length; 
//         console.log(phraseLength);
//     }
// }

// //const newGame = new game();
// console.log(game.getRandomPhrase, 'phraselength');



