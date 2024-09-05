
var arr = [
    {   Quote :"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author : "hasan"
    },
    {   Quote :"A room without books is like a body without a soul.",
        author : "noor"
    },
    {   Quote :"To live is the rarest thing in the world. Most people exist, that is all.",
        author : "mayar"
    },
    {   Quote :"A friend is someone who knows all about you and still loves you",
        author : "fatema"
    },
    {   Quote :"Always forgive your enemies; nothing annoys them so much.",
        author : "hellen"
    },
];

// end of array !!!!!!!!!!!!!!!!!!!
// start of function !!!!!!!!!!!!!!
var Quotes = arr.slice();
var usedQuotes = [];

function createQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * Quotes.length);
    } while (usedQuotes.includes(randomIndex));
    usedQuotes.push(randomIndex);
    var 
    randomQuote = Quotes[randomIndex];
    window.document.getElementById("fristQuote").innerHTML = randomQuote.Quote;
    window.document.getElementById("Quote's").innerHTML = randomQuote.author;
    if (usedQuotes.length == Quotes.length) {
        usedQuotes = [];
    }
}



// end task  !!!!!!!!!!!!!!!!!!!!!!!!
// test   
    // do {
    //     randomIndex = Math.floor(Math.random() * Quotes.length);
    // } 
    // while (usedQuotes.includes(randomIndex));
    // usedQuotes.push(randomIndex);
    // if (usedQuotes.length == Quotes.length) {
    //     usedQuotes = [];
    // }

