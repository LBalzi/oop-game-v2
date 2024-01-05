/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
//selects all the keys of the on screen keyboard
const keyboardButtons = document.querySelectorAll('#qwerty .keyrow button');

document.getElementById("btn__reset").addEventListener('click', () => {
    //resets the phrase, the onscreen keyboard and the lives
    let liElements = document.querySelectorAll('#phrase ul li');
    const heartImages = document.querySelectorAll('.tries img');

    liElements.forEach((element) => {
        element.parentNode.removeChild(element);
    })
    keyboardButtons.forEach((button) => {
        button.disabled = false;
        button.className = 'key';
    });

    heartImages.forEach((heart) => {
        heart.src = 'images/liveHeart.png';
    });
    game = new Game;
    game.startGame();
});

keyboardButtons.forEach((button) => {
    //event listener on each single key so that clicking the spaces between 
    //and around the onscreen keyboard buttons does not result in the handleInteraction() method being called
    button.addEventListener('click', (event) => {
        game.handleInteraction(event.target);
    })
})