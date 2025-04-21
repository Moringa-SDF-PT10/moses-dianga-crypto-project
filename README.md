# moses-dianga-crypto-project - Crypto Guess Challenge

Project Summary

The Crypto Guess Challenge is an interactive single-page application (SPA) where players guess cryptocurrency names based on hints like symbol, rank, price, market cap, first letter, and launch year. Built with HTML, CSS, and JavaScript, it uses the CoinPaprika API for real-time data. The game features three rounds, instant feedback, a final score, and a restart option. Developed for the Moringa School SDF-PT10 Phase 1 Final Project, it showcases asynchronous API integration, event listeners, and GitHub Pages deployment.

How to Play

# Click "Start Game" to begin.
# View hints for a mystery cryptocurrency (e.g., Symbol: BTC, Rank: 1).
# Type your guess and click "Guess" or press Enter.
# See feedback: "Correct " or "Wrong  It was [Coin Name]".
# Click "Next Round" to continue (3 rounds total).
# Check your score and coin names at the end.
# Click "Play Again" to restart.

Technologies Used

#HTML: Structures the game’s layout.
# CSS: Styles the interface with a clean, centered design.
# JavaScript: Handles game logic, API calls, and interactivity.
# CoinPaprika API: Provides cryptocurrency data via:
https://api.coinpaprika.com/v1/coins
https://api.coinpaprika.com/v1/tickers/{coin_id}
#GitHub Pages: Hosts the live demo.

How to Run Locally
Clone the repository: git clone https://github.com/Moringa-SDF-PT10/firstname-lastname-crypto-project.git

Navigate to the directory: cd moses-dianga-crypto-project

Open index.html in a browser or use: npx live-server

Note: Requires an internet connection for API data.

Project Structure

moses-dianga-crypto-project/

# index.html    # HTML structure
# style.css     # CSS styling
# script.js     # JavaScript logic
# README.md     # Documentation

Technical Features

# SPA: Single index.html with no redirects.
# API: Async fetch for CoinPaprika data.
# Events: Click (start, guess, next, restart), keypress (Enter).
# Array Iteration: forEach for coin names display.
# DRY Code: Functions for API calls, hints, and guesses.
# Deployment: Private repo on GitHub Pages (gh-pages).

Acknowledgments

# CoinPaprika: For the public API.
# Moringa School: For project guidance.

# Submitted for Moringa School SDF-PT10 Phase 1 Final Project, due April 21, 2025.





