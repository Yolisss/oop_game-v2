/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//const phrase = newPhrase();
//blueprint to create phrase objs

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const phraseContainer = document.querySelector('#phrase ul');
        let html = ""
         for (const char of this.phrase) {
            if (char === " ") {
                html += '<li class="space"> </li>';
            } else {
                // create a class with hidden class and the character
                html += ` <li class="hide letter ${char}">${char}</li>`;
            }
        }
           phraseContainer.innerHTML = html; 
    }
   checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.hide'); 

        //loop to see which li contained a certain letter
        letters.forEach(li => {
            if (li.innerText === letter) {
                li.classList.add('show');
                li.classList.remove('hide');
            }
        });
    }
}


{/* <div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div> */}