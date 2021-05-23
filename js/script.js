/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// array storing the quotes objects
let quotes =[];
quotes=[
    {quote: "I have no special talent. I am only passionately curious.", source:"Albert Einstein" },
    {quote: "Wisely, and slow. They stumble that run fast.", source:"William Shakespeare" },
    {quote: "If you judge people, you have no time to love them.", source:"Mother Teresa" },
    {quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", source:"Mark Twain" },
    {quote: "All that we are is the result of what we have thought.", source:"Buddha " },
    {quote: "The most courageous act is still to think for yourself. Aloud.", source:"Coco Chane " },
    {quote: "Stay hungry, stay foolish.", source:"Steve Jobs " },
    {quote: "Insanity: doing the same thing over and over again and expecting different results. ", source:"Albert Einstein" },
    {quote: "It’s tangible, it’s solid, it’s beautiful. It’s artistic, from my standpoint, and I just love real estate.", source:"Donald Trump",profession:"45th President of the United States of America"},
    {quote: "The future belongs to those who prepare for it today. ", source:"Malcolm X " },
    {quote: "The successful warrior is the average man, with laser-like focus.", source:"Bruce Lee" },
    {quote: "Those who dare to fail miserably can achieve greatly.", source:"John F. Kennedy" },
    {quote: "A great man is always willing to be little.", source:"Ralph Waldo Emerson" },
    {quote: "Don’t count the days, make the days count. ", source:"Muhammad Ali " },
    {quote: "In order to be irreplaceable one must always be different.", source:"Coco Chanel" },
    {quote: "Be kind whenever possible. It is always possible.", source:"Dalai Lama" },
    {quote: "I like criticism. It makes you strong.", source:"LeBron James" },
    {quote: "Well done is better than well said.", source:"Benjamin Franklin" },
    {quote: "The root of suffering is attachment. ", source:"Buddha" },
    {quote:"Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security.",source:"Russell Sage",profession:"financier, railroad executive and Whig politician from New York, United States."},
    {quote:"I love it when a plan comes together.",source:" Colonel John “Hannibal” Smith",date:"January 23 1983",citation:"The A-Team" }
];


//function to create a random number that will be used to access one of the objects from the quote array
function getRandomQuote(){
  let randomNumber=parseInt(Math.random()*quotes.length);
  let selectQuotes=quotes[randomNumber]; 
  return selectQuotes;
}


//function that will generate a string. it will use the object given by the fucntion getRandomQuote and store all the properties of that object on a string
function printQuote(){
  let randomQuote=getRandomQuote();
  let stringHtml=`<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
 //if the object stored on randomQuote has a date propertie , the value of date will be concatenated to the stringHtml
  for(let key in randomQuote){
    if(key==="date"){
      stringHtml+=`<span class="year">${randomQuote.date} </span>`;
    }
 //if the object stored on randomQuote has a citation propertie , the value of date will be concatenated to the stringHtml
    if(key==="citation"){
      stringHtml+=`<span class="year">${randomQuote.citation} </span>`;
    }  
 //if the object stored on randomQuote has a profession propertie , the value of date will be concatenated to the stringHtml
    if(key==="profession"){
      stringHtml+=`<span class="year">${randomQuote.profession} </span>`;
    }  
  }
  stringHtml+=`</p>`;
  //function to display a new quote every 5seconds
  setTimeout(printQuote,5000);
  
  return document.getElementById('quote-box').innerHTML = stringHtml;
} 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
//every time the user opens the webpage it will display a random quote
printQuote();