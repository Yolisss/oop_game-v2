/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//const phrase = newPhrase();
//blueprint to create phrase objs
class Phrase{
    constructor(phrase){
       this.phrase = phrase.toLowerCase()
    }
    addPhraseToDisplay = function(){
        let newPhrase = "";
        let letter = document.createElement('li');
        this.phrase.split("").forEach(letter =>{
            if(letter === " "){
                newPhrase += " "
            } else {
                newPhrase += `<li>${letter}</li>`;
            }
        })   
        console.log(newPhrase);
    }
    checkLetter = function(){
        //grabbing list of letters
        const letters = document.querySelectorAll('.key');
        const indivItems = addPhraseToDisplay();
            console.log(letters);
        letters.addEventListener('click', () =>{
            if(e.target === indivItems){
                
            }           
        })
    }
}

const samplePhrase = new Phrase( 'hello word');
samplePhrase.addPhraseToDisplay();
console.log(samplePhrase, 'phrase');
samplePhrase.checkLetter;






//what represents letter placeholders?
//each letter is present by one 'li' elem
//when player guesses letter correctly, empty box is replaced
//with matched letter 



//adds letter placeholders to be displayed when the game starts
//do i know when the game starts?
//note: each letter is presented by an empty box = <li> </li>
//where am i going to display the info:
//let displayPhrase = document.querySelector('#phrase')
//1. we have a button 'game start'
    //let button = getElementById('btn_reset')
//button.addEventListener('click', (e) =>{
    //if(button){
        //1. i want to grab the hidden cards
//         <div id="phrase" class="section">
//     <ul>
//         <li class="hide letter h">h</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter w">w</li>
//         <li class="space"> </li>
//         <li class="hide letter a">a</li>
//         <li class="hide letter r">r</li>
//         <li class="hide letter e">e</li>
//         <li class="space"> </li>
//         <li class="hide letter y">y</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter u">u</li>
//     </ul>
// </div>
    //}
//})