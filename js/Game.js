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
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    //matches chosen letter in each phrase and check if I won
    handleInteraction (button) {
        //created variable to retrive the text on each button 
      const guessLetter = button.innerText;
      console.log(guessLetter, 'guessletter')
      if (this.activePhrase.checkLetter(guessLetter)) {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(guessLetter);
        if (this.checkForWin()) {
            this.gameOver(true);
        }

      } else {
        button.classList.add('wrong');
        this.removeLife();
      }
    }

    //removes life each time a wrong character is chosen and the missed property incremenated
    removeLife () {
        //select all the liveheart img
       const hearts = document.querySelectorAll('.tries img');
       this.missed++
       if (this.missed >= 5) {
            this.gameOver(false);
       } else {
        hearts[this.missed - 1].src = 'images/lostHeart.png';
       }
    }

    //ckecks if all the letters are revealed
    checkForWin () {
        const phraseLetters = document.querySelectorAll('.hide');
        console.log(phraseLetters);
        if (phraseLetters.length <= 0) {
            return true;
        } else {
            return false;
        }
    }

    //ends the game and the display a win/loss message, and resets the game
    gameOver (outcome) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'block';
        overlay.classList.remove('start');
        if (outcome) {
           overlay.className = 'win';
           gameOverMessage.innerText = 'You are a winner!';
        } else {
           overlay.className = 'lose';
           gameOverMessage.innerText = 'Try Again!';
        }
        this.resetGame();
    }

    //step 4, reset the game by resetting missed to 0 
    resetGame () {
        document.querySelector('#phrase ul').innerHTML = '';
        const qwertyBtns = document.querySelectorAll('#qwerty button');
        qwertyBtns.forEach(btn => {
            btn.className = 'key';
            btn.disabled = false;
        });

        this.missed = 0;
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(ht => {
            ht.src = 'images/liveHeart.png';
        })
        
    }
}


