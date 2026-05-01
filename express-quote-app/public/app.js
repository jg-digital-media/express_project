console.log("app.js connected! (express_project - repo - v4) - 01/05/2026 - 13:11");

// Link to quotes data file
const QUOTES_DATA_URL = "/api/quotes";


fetch(QUOTES_DATA_URL)
  .then(response => response.json())
  .then(data => {
    console.log("Quotes loaded:", data);
  })
  .catch(error => {
    console.error("Error loading quotes:", error);
  });


function localDayNumber() {
    const d = new Date();
    return Math.floor(
        new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86400000
    );
}

function dailyQuoteIndex(length) {
    if (length < 1) return 0;
    return localDayNumber() % length;
}

function randomIndex(length, avoidIndex) {
    if (length < 2) return 0;
    let i = avoidIndex;
    let guard = 0;
    while (i === avoidIndex && guard < 50) {
        i = Math.floor(Math.random() * length);
        guard++;
    }
    return i;
}

function setQuote(quoteEl, authorEl, item) {
    quoteEl.textContent = item.quote;
    authorEl.textContent = item.author;
}

document.addEventListener("DOMContentLoaded", () => {
    const quoteEl = document.getElementById("quote-text");
    const authorEl = document.getElementById("quote-author");
    const newBtn = document.querySelector(".new---quote");

    if (!quoteEl || !authorEl || !newBtn) return;

    fetch(QUOTES_DATA_URL)
        .then((res) => {
            if (!res.ok) throw new Error(`Quotes request failed: ${res.status}`);
            return res.json();
        })
        .then((quotes) => {
            if (!Array.isArray(quotes) || quotes.length === 0) {
                quoteEl.textContent = "No quotes available.";
                return;
            }

            let currentIndex = dailyQuoteIndex(quotes.length);
            setQuote(quoteEl, authorEl, quotes[currentIndex]);

            newBtn.addEventListener("click", (e) => {
                e.preventDefault();
                currentIndex = randomIndex(quotes.length, currentIndex);
                setQuote(quoteEl, authorEl, quotes[currentIndex]);
            });
        })
        .catch(() => {
            quoteEl.textContent = "Could not load quotes.";
            authorEl.textContent = "";
        });
});
