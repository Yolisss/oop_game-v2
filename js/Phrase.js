/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//blueprint to create phrase objs
class Phrase{
    constructor(phrase){
       this.phrase = phrase.toLowerCase()
    }
}

const samplePhrase = new Phrase( 'hello word');
console.log(samplePhrase, 'phrase');