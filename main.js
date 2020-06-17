let quotes = [
    {
        name: 'Bill Gates',
        quote: 'Success is a lousy teacher. It seduces smart people into thinking they cannot lose'
    },
    {
        name: 'Albert Einstein',
        quote: 'Everything should be made as simple as possible, but no simpler'
    },
    {
        name: 'Gandhi',
        quote: 'The future depends on what we do in the present'
    },
    {
        name: 'Abraham lincoln',
        quote: 'Whateaver you are, be a good one!'
    },
    {
        name: 'Walt Disney',
        quote: 'If you can dream it, you can do it,'
    }
]   

let quoteBtn = document.querySelector('#quote-btn');
let quote = document.querySelector('#quote');
let quoteAuthor = document.querySelector('#quoteAuthor');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote;     
    quoteAuthor.innerHTML = quotes[number].name;
    
}