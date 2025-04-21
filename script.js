// Get DOM elements
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('game-screen');
const roundDisplay = document.getElementById('round');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const nextButton = document.getElementById('next-button');
const feedback = document.getElementById('feedback');
const endScreen = document.getElementById('end-screen');
const scoreDisplay = document.getElementById('score');
const coinsList = document.getElementById('coins-list');
const restartButton = document.getElementById('restart-button');

// Game variables
let round = 0;
let score = 0;
let currentCoin = null;
let coinNames = [];
let allCoins = [];

// Function to fetch list of coins
function getCoins() {
    fetch('https://api.coinpaprika.com/v1/coins')
        .then(response => response.json())
        .then(coins => {
            allCoins = coins.slice(0, 50); // Take top 50 coins
        })
        .catch(error => {
            feedback.innerText = 'Error loading coins!';
            console.log(error);
        });
}

// Function to fetch details for one coin
function getCoinDetails(coinId) {
    return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        .then(response => response.json())
        .catch(error => {
            feedback.innerText = 'Error loading coin!';
            console.log(error);
            return null;
        });
}

// Function to pick a random coin
function pickCoin() {
    const index = Math.floor(Math.random() * allCoins.length);
    return allCoins[index];
}

// Function to show hints
function showHints(coin) {
    document.getElementById('hint-symbol').innerText = coin.symbol || '?';
    document.getElementById('hint-rank').innerText = coin.rank || '?';
    document.getElementById('hint-price').innerText = coin.quotes?.USD?.price?.toFixed(2) || '?';
    document.getElementById('hint-market-cap').innerText = coin.quotes?.USD?.market_cap || '?';
    document.getElementById('hint-first-letter').innerText = coin.name?.charAt(0) || '?';
    document.getElementById('hint-year').innerText = coin.last_updated ? new Date(coin.last_updated).getFullYear() : '?';
}

// Function to start a new round
function startRound() {
    if (round >= 3) {
        endGame();
        return;
    }
    round++;
    roundDisplay.innerText = round;
    const coin = pickCoin();
    getCoinDetails(coin.id).then(data => {
        if (data) {
            currentCoin = data;
            showHints(data);
            guessInput.value = '';
            feedback.innerText = '';
            guessButton.style.display = 'inline';
            nextButton.style.display = 'none';
        } else {
            feedback.innerText = 'Error! Try next round.';
            nextButton.style.display = 'inline';
        }
    });
}

// Function to check the user's guess
function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    const correctName = currentCoin.name.toLowerCase();
    if (guess === correctName) {
        score++;
        feedback.innerText = 'Correct 😊';
    } else {
        feedback.innerText = 'Wrong 😞 It was ' + currentCoin.name;
    }
    coinNames.push(currentCoin.name);
    guessButton.style.display = 'none';
    nextButton.style.display = 'inline';
}

// Function to end the game
function endGame() {
    gameScreen.style.display = 'none';
    endScreen.style.display = 'block';
    scoreDisplay.innerText = score;
    let coinsText = '';
    coinNames.forEach(name => {
        coinsText += name + ', ';
    });
    coinsList.innerText = coinsText.slice(0, -2) || 'None';
}

// Event for start button
startButton.onclick = function() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    getCoins();
    setTimeout(startRound, 1000); // Wait for coins to load
};

// Events for guessing
guessButton.onclick = checkGuess;
guessInput.onkeypress = function(event) {
    if (event.key === 'Enter') checkGuess();
};

// Event for next round
nextButton.onclick = startRound;

// Event for restart
restartButton.onclick = function() {
    round = 0;
    score = 0;
    currentCoin = null;
    coinNames = [];
    allCoins = [];
    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
    feedback.innerText = '';
};