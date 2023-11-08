/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed = 0,
        this.phrases = [
            new Phrase ("adventure is out there"), 
            new Phrase ("just keep swimming"),
            new Phrase ("the only limit is your imagination"),
            new Phrase ("Dishonor on you"),
            new Phrase ("take her to the moon for me")],
        this.activePhrase = null
    }
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    startGame(){
        //"when the game starts, the start screen disapprears
        //and i'll see my phrase by calling getRandomPhrase and 
        //addPhraseToDisplay functions"
        //hides start screen
        const overlay = document.querySelector('#overlay');
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase)
        //grabbing from phrase file
        this.activePhrase.addPhraseToDisplay();
    }
}


