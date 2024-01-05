/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        //This initialises the missed variable, the phrases that are part of the game and the activePhrase variable that will be phrase to be found
        this.missed = 0;
        this.phrases = ['Hello World', 'Visual Studio Code', 'Learning Javascript is hard', 'Coding is awesome', 'I love programming'];
        this.activePhrase = null;
    };

    startGame() {
        // hides the overlay, calls the getRandomPhrase method to pick a phrase of the 5 at random
        // and adds that phrase to the display by using the addPhraseToDisplay method
        document.getElementById('overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    getRandomPhrase() {
        //chooses one of the five phrases at random
            let randomNumber = Math.floor(Math.random() * this.phrases.length);
            return new Phrase(this.phrases[randomNumber]);
    };

    handleInteraction(button) {
        //disables the button pressed, checks if the letter is correct by using the checkLetter method in the Phrase class
        //gives appropriate css classes if the letter is matched or not, calls checkForWin and GameOver to check whether the game
        //was won/lost and if it's time to end it. If the letter doesn't match it calls the removeLife method
            const checkTrueOrFalse = this.activePhrase.checkLetter(button.textContent);
    
            if (checkTrueOrFalse === false) {
    
                this.removeLife();
                button.disabled = true;
                button.className = 'wrong';
    
            }
    
            if (checkTrueOrFalse === true) {
    
                button.disabled = true;
                button.className = 'chosen'
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                this.gameOver();
    
            }
    }

    removeLife() {
        //removes a life from the scoreboard by replacing the heart imeages, increments the missed property, 
        //checks if player has lost if yes calls the gameOver method
        const heartImages = document.querySelectorAll('.tries img');
        // Increment the missed property
        this.missed++;
    // Replace a live heart with a lost heart image
    if (this.missed <= 5) {
        let lostHeartIndex = 5 - this.missed;
        heartImages[lostHeartIndex].src = 'images/lostHeart.png';
    }
    // Check if the player has run out of lives
    if (this.missed >= 5) {
        this.gameOver(false);
    }
}
    checkForWin() {
        //checkForWin checks if the game was won by checking whether there are still undiscovered letters on the screen
        let liElements = document.querySelectorAll('#phrase ul li');
        let WinOrLose = true;

        liElements.forEach((element) => {
            if (element.classList.contains("hide")) {
                WinOrLose = false;
            }
        });
        return WinOrLose;

    }

    gameOver(gameWon) {

        //selecting the DOM elements
        const overlay = document.querySelector('#overlay');
        const newGameButton = document.querySelector('#btn__reset');
        const h1MessageDisplay = document.querySelector('#game-over-message');
//There are two ways of ending the game: winning or losing, this boolean value is stored in the variable gameWon
        if (this.checkForWin() === true) {
            gameWon = true;
        }

        if (this.missed === 5) {
            gameWon = false;
        }

        if (gameWon === true) {
            overlay.style.backgroundColor = '';
            h1MessageDisplay.innerHTML = `Congratulations you won!`;
            overlay.className = 'win';
            overlay.style.display = '';
            newGameButton.innerHTML = 'New Game';
        }

        if (gameWon === false) {
            // This shows the player they lost and calls the btn_reset button
            overlay.style.backgroundColor = '';
            h1MessageDisplay.innerHTML = "Unfortunately you couldn't guess the phrase!";
            overlay.className = 'lose'
            overlay.style.display = '';
            newGameButton.innerHTML = 'Try Again';
        }

        return gameWon;

    }
}