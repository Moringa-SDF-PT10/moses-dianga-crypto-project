const cryptoContainer = document.getElementById('cryptoContainer');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');

// Fetch crypto data from CoinGecko API
async function fetchCryptoData() {
    try {
        loading.style.display = 'block';
        const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        cryptoContainer.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    } finally {
        loading.style.display = 'none';
    }
}

// Display crypto data
function displayCryptoData(cryptos) {
    cryptoContainer.innerHTML = '';

    cryptos.forEach(crypto => {
        const cryptoCard = document.createElement('div');
        cryptoCard.className = 'crypto-card';
        
        cryptoCard.innerHTML = `
            <div class="crypto-header">
                <img class="crypto-img" src="${crypto.image}" alt="${crypto.name}">
                <div>
                    <h2>${crypto.name}</h2>
                    <p>${crypto.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div class="crypto-info">
                <p>Price: $${crypto.current_price.toLocaleString()}</p>
                <p class="${crypto.price_change_percentage_24h >= 0 ? 'price-up' : 'price-down'}">
                    24h: ${crypto.price_change_percentage_24h.toFixed(2)}%
                </p>
            </div>
        `;

        cryptoContainer.appendChild(cryptoCard);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCryptos = cryptos.filter(crypto => 
        crypto.name.toLowerCase().includes(searchTerm) || 
        crypto.symbol.toLowerCase().includes(searchTerm)
    );
    displayCryptoData(filteredCryptos);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoData();
});

// Store original crypto data
let cryptos = [];
async function fetchAndStoreData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    cryptos = await response.json();
}

// Initialize
fetchAndStoreData();