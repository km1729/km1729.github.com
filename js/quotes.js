const quotes = [
  {
    quote: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox"
  },
  {
    quote: "Impossible makes everything possible.",
    author: "Norman Vincent Peale"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Not stating a reason allows you to achieve goals, but having a reason gives you strength.",
    author: "Napoleon Bonaparte"
  },
  {
    quote: "The most important thing in life is to find yourself.",
    author: "Paulo Coelho"
  },
  {
    quote: "Today is the day to put into action what you planned yesterday.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Adversity is not the heavy burden of life but an essential teacher.",
    author: "Hillary Clinton"
  },
  {
    quote: "Believe in yourself and respect others. Then, you can rule the world.",
    author: "Gotthold Ephraim Lessing"
  },
  {
    quote: "Whether you think you can or think you can't, you are right.",
    author: "Henry Ford"
  },
  {
    quote: "When you look at the universe, you realize how small your problems are.",
    author: "Unknown"
  }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author