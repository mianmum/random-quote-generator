const module = !function(){
  // cache elements to variables
  const button = document.getElementById('loadQuote');
  const quoteBox = document.getElementById('quote-box');
  const body = document.querySelector("body");
  const corner = document.getElementById("corner");
  // quotes array
  // quotes
  const quotes = [
    {
      quote: "Don't cry because it's over, smile because it happened.",
      source: "Dr. Seuss",
      category: "Writer"
    },
    {
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      source: "Dr. Seuss",
      category: "Writer"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      source: "Robert Frost",
      category: "Writer"
    },
    {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      source: "J.K. Rowling",
      citation: "Harry Potter and the Goblet of Fire",
      category: "Writer"
    },
    {
      quote:"All that is gold does not glitter, Not all those who wander are lost: The old that is strong does not wither, Deep roots are not reached by the frost.",
      source: "J.R.R. Tolkien",
      citation: "The Fellowship of the Ring",
      year: 1954,
      category: "Writer"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      source: "Oscar Wilde",
      category: "Writer"
    },
    {
      quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      source: "Marilyn Monroe",
      category: "Actor/Actress"
    },
    {
      quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
      source: "Marilyn Monroe",
      category: "Actor/Actress"
    },
    {
      quote: "There are wars being fought! Who cares what I'm doing on a Saturday night. I'm not even a celebrity.",
      source: "Peter Dinklage",
      category: "Actor/Actress"
    },
    {
      quote: "The challenge for me as an actor is if you become a celebrity, you don't meet strangers anymore. And strangers are where we have our anonymity. And I believe it's essential for the soul to be anonymous, especially if you're going to be an actor.",
      source: "Matthew McConaughey",
      category: "Actor/Actress"
    },
    {
      quote: "If you're an actress or a musician, everyone thinks you're hot.",
      source: "Natalie Portman",
      category: "Actor/Actress"
    },
    {
      quote: "I don't need bodyguards. I'm from the South Bronx.",
      source: "Al Pacino",
      category: "Actor/Actress"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      source: "Albert Einstein",
      category: "Academic"
    },
    {
      quote: "Without music, life would be a mistake.",
      source: "Friedrich Nietzsche",
      citation: "Twilight of the Idols",
      category: "Academic"
    },
    {
      quote: "Man is the only creature who refuses to be what he is.",
      source: "Albert Camus",
      category: "Academic"
    },
    {
      quote: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.",
      source: "Stephen Hawking",
      category: "Academic"
    },
    {
      quote: "Wise men speak because they have something to say; fools because they have to say something.",
      source: "Plato",
      category: "Academic"
    },
    {
      quote: "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
      source: "Bertrand Russell",
      category: "Academic"
    },
    {
      quote: "So many books, so little time.",
      source: "Frank Zappa",
      category: "Musician"
    },
    {
      quote: "There is nothing is more musical than a sunset. He who feels what he sees will find no more beautiful example of development in all that book which, alas, musicians read but too little - the book of Nature.",
      source: "Claude Debussy",
      category: "Musician"
    },
    {
      quote: "All musicians are subconciously mathematicians.",
      source: "Thelonius Monk",
      category: "Musician"
    },
    {
      quote: "Musicians are in season all the time.",
      source: "John Legend",
      category: "Musician"
    },
    {
      quote: "You gotta be able to smile through the bullshit.",
      source: "Tupac Amaru Shakur",
      category: "Musician"
    },
    {
      quote: "If you admire someone, you should go ahead and tell them. People never get the flowers while they can still smell them.",
      source: "Kanye West",
      category: "Musician"
    }
  ];
  // function to get random quote
  const getRandomQuote = () => {
    return (quotes[Math.floor(Math.random() * (quotes.length - 1)) + 1])
  };
  // print quote
  const printQuote = () => {
    let randomQuote = getRandomQuote();
    quoteBox.innerHTML = "<p class=\"quote\">" + randomQuote.quote + "</p> <p class=\"source\">" + randomQuote.source;
    // check for citation and year properties
    if (randomQuote.hasOwnProperty('citation')) {
      quoteBox.innerHTML += "<span class=\"citation\">" + randomQuote.citation + "</span>";
    };
    if (randomQuote.hasOwnProperty('year')) {
      quoteBox.innerHTML += "<span class=\"year\">" + randomQuote.year + "</span>";
    };
    quoteBox.innerHTML += "</p>";
    if (randomQuote.hasOwnProperty('category')) {
      corner.innerHTML ="<p class=\"category\">" + randomQuote.category + "</p>";
    };
  };
  // generate random colour
  const randomColour = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + " ," + b + ")";
  };
  // change background colour to random random random colour
  const changeColour = () => {
    let colour = randomColour();
    body.style.backgroundColor = colour;
  };
  // full quote/colour generation function
  const generate = () => {
    printQuote();
    changeColour();
  };
  // auto-refresh quote and colour
  let intervalHandle;
  const autoGenerate = () => {
     intervalHandle = window.setInterval(generate, 5000);
  };
  autoGenerate();
  // event listener to respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "printQuote" function is called
    // also change background to random colour upon click
  button.addEventListener("click", () => {
    window.clearInterval(intervalHandle);
    autoGenerate();
    generate();
  }, false);
}();
