Project Summary

The Crypto Guess Challenge is an interactive single-page application (SPA) that challenges players to guess cryptocurrency names based on hints such as symbol, rank, price, market cap, first letter, and launch year. It has been built with HTML, CSS, and JavaScript, it integrates the CoinPaprika API to fetch real-time cryptocurrency data. The game consists of three rounds, provides instant feedback on guesses, displays a final score, and provides a restart option for replayability. I developed this crypto guess game for the Moringa School SDF-PT10 Phase 1 Final Project to demonstrate asynchronous API calls, event handling, and deployment on GitHub Pages.

How to Play

Start the Game:

Click the "Start Game" button on the welcome screen.

View Hints:

A mystery cryptocurrency is displayed with hints: Symbol (e.g., BTC) Rank (market cap ranking) Price (USD) Market Cap (USD) First Letter of the coin’s name Launch Year

Submit a Guess: Enter your guess in the input field and click "Guess" or press Enter.

Receive Feedback: Correct guesses show "Correct 😊" and earn a point. Incorrect guesses show "Wrong 😞 It was [Coin Name]".

Continue Rounds: Click "Next Round" to proceed (3 rounds total). View Results: After three rounds, see your score (out of 3) and the coin names. Replay: Click "Play Again" to start a new game.

Technologies Used

1. HTML: Structures the SPA with elements for the start screen, game interface (hints, input, buttons), and end screen.
2. CSS: Styles the game with a centered layout, clean design, and responsive elements using properties like text-align, padding, and background-color.
3. JavaScript: Implements game logic, including:
- Fetching data from the CoinPaprika API.
- Handling user interactions via event listeners.
- Managing game state (rounds, score, coins).
- Updating the DOM dynamically.

4. CoinPaprika API: Provides real-time data via:
- https://api.coinpaprika.com/v1/coins (coin list).
- https://api.coinpaprika.com/v1/tickers/{coin_id} (coin details).

5. GitHub Pages: Hosts the live application on the gh-pages branch.

How to Run the App Locally

To run the Crypto Guess Challenge locally:

- Clone the Repository: git clone https://github.com/Moringa-SDF-PT10/moses-dianga-crypto-project.git
- Navigate to the Directory: cd moses-dianga-crypto-project
- Open the Application:
- Open index.html in a web browser (liveserver on VS Code - e.g., Chrome, Firefox).

Live GitHub Pages Version

Play the Crypto Guess Challenge online:

https://moringa-sdf-pt10.github.io/moses-dianga-crypto-project/

Acknowledgments

1.CoinPaprika: For providing a free API for cryptocurrency data. 
2. Moringa School: For guidance and support during the SDF-PT10 program. 
3. GitHub: For hosting the repository and GitHub Pages.

Submitted to Moringa School Phase 1 Final Project.
