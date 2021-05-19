let quotes =[
    {quote: "I have no special talent. I am only passionately curious.", source:"Albert Einstein" },
    {quote: "Wisely, and slow. They stumble that run fast.", source:"William Shakespeare" },
    {quote: "If you judge people, you have no time to love them.", source:"Mother Teresa" },
    {quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", source:"Mark Twain" },
    {quote: "All that we are is the result of what we have thought.", source:"Buddha " },
    {quote: "The most courageous act is still to think for yourself. Aloud.", source:"Coco Chane " },
    {quote: "Stay hungry, stay foolish.", source:"Steve Jobs " },
    {quote: "Insanity: doing the same thing over and over again and expecting different results. ", source:"Albert Einstein" },
    {quote: "The greatest wealth is to live content with little.", source:"Plato " },
    {quote: "The future belongs to those who prepare for it today. ", source:"Malcolm X " },
    {quote: "The successful warrior is the average man, with laser-like focus.", source:"Bruce Lee" },
    {quote: "Those who dare to fail miserably can achieve greatly.", source:"John F. Kennedy" },
    {quote: "A great man is always willing to be little.", source:"Ralph Waldo Emerson" },
    {quote: "Don’t count the days, make the days count. ", source:"Muhammad Ali " },
    {quote: "In order to be irreplaceable one must always be different.", source:"Coco Chanel" },
    {quote: "Be kind whenever possible. It is always possible.", source:"Dalai Lama" },
    {quote: "I like criticism. It makes you strong.", source:"LeBron James" },
    {quote: "Well done is better than well said.", source:"Benjamin Franklin" },
    {quote: "The root of suffering is attachment. ", source:"Buddha" }
];
let randomNumber=parseInt(Math.random()*quotes.length);
let selectQuotes=quotes[randomNumber];
console.log(`${selectQuotes.quote} by: ${selectQuotes.source}`);
//console.log(selectQuotes);

//document.querySelector("main").innerHTML= message;