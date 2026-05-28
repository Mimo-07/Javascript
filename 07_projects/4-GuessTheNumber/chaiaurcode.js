const userInput = document.querySelector('#guessField');
const submit = document.getElementById('subt');
const result = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const guessRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const form = document.querySelector('form');

const randomNumber = parseInt((Math.random() * 100) + 1);

const newGameButton = document.createElement('button');

let prevGuess = [];
let TOTAL_GUESSES = 1;

let playGame = true;

if(playGame){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(number){
    // validate input
    if(Number.isNaN(number) || number < 1 || number > 100){
       alert('Please enter a valid number'); 
    }
    else {
        prevGuess.push(number);
        if(TOTAL_GUESSES < 1){
            displayGuess(number);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(number);
            checkGuess(number);
        }

    }
}

function checkGuess(number){
    // checks if the guess is higher or lower than random number
    if(number === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(number < randomNumber){
        displayMessage(`Number is low`);
    }
    else {
        displayMessage(`Number is high`);
    }
}

function displayGuess(number){
    // cleanup existing guess
    userInput.value = '';
    TOTAL_GUESSES = TOTAL_GUESSES - 1;

    guesses.innerText += `${number}; `;
    guessRemain.innerText = TOTAL_GUESSES;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    newGame();
}

function newGame(){
    
}


