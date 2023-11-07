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
        let html = ""
        this.phrase.split("").forEach(letter =>{
            if(letter === ""){
                html += " ";
            } else{
                html += `<li class="hide letter ${letter}">${letter}</li>`
                //"where is the ul in dom" => returns HMTL elem 
            }
        })
        let display =  document.querySelector('#phrase ul');
            display.insertAdjacentHTML('afterbegin', html);
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