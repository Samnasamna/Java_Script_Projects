const quotes = [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "In the middle of every difficulty lies opportunity.",
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to predict the future is to create it."
];
const usedIdx = new Set();
const quoteElement = document.getElementById("quote");

function generateQuotes(){
    if (usedIdx.size === quotes.length) {
        usedIdx.clear(); 
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIdx.has(randomIdx)) continue;
        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIdx.add(randomIdx);
        break;
    }
}
