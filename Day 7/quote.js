import React from "react";
import { Link } from "react-router-dom";
const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    // Add more quotes...
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(quote.text);
    console.log("- " + quote.author);
  }
  
  // Call the generateQuote() function wherever you need it
  generateQuote();