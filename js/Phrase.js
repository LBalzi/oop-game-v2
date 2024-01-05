/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Initializes the Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        //This method adds the phrase by splitting it in letters and spaces and putting them in 
        //individual lis with class of hide letter or space
        const phraseLetters = this.phrase.split('');
        const phraseSection = document.getElementById("phrase").firstElementChild;
        let letterClass = '';
        phraseLetters.forEach(letter => {
            if (letter === ' ') {
                letterClass= 'space';
                phraseSection.insertAdjacentHTML("beforeend", `<li class="space">${letter}</li>`)
                } else {
                    phraseSection.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`)
                }
            });
        }
    
    checkLetter(letter) {
        //check if the letter is a match
        return game.activePhrase.phrase.includes(letter)
    }

    showMatchedLetter(letter) {
        //shows the matched letter on the screen by changing its css class
        let liElements = document.querySelectorAll('#phrase ul li')
        liElements.forEach((li) => {
            if (li.textContent === letter) {
                li.classList.remove("hide");
                li.classList.add("show");
            };
        });
    };
};

