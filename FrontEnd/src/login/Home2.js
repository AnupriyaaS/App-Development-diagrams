import React from 'react';
import './Home2.css';
import { Link } from 'react-router-dom';


const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your education is a dress rehearsal for a life that is yours to lead.",
    author: "—Nora Ephron"
  },
  {
    text: "Fortune does favor the bold, and I promise that you will never know what you're capable of unless you try.",
    author: "—Sheryl Sandberg"
  },
  {
    text: "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.",
    author:"—Malcolm X"
  },
  {
    text:"There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do.",
    author: "—Derek Jeter"
  },
  {
    text:"The beginning is the most important part of the work.",
    author:"—Plato"
  },
  {
    text:"Let us remember: One book, one pen, one child, and one teacher can change the world.",
    author:"—Malala Yousafzai"
  }
];

const generateQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return (
    <div>
      <p>{quote.text}</p>
      <p>- {quote.author}</p>
    </div>
  );
};

const Home2 = () => {
  return (
    <div className="appbar">
      <div className="home-container">
        <header>
          <h2 className="logo">TAMHSS</h2>
          <nav className="navigation">
            <Link to={"/stddb"}>Database</Link>
            <Link to={"/return"}>Results</Link>
            <Link to={"/assig"}>Assignment</Link>
            <button type="submit" className="buttonlogout"><Link to="/">Logout</Link></button>
          </nav>
        </header>
        <div className="white-box">
          <h1 className="school-name">
            Tiny Academy Matriculation Higher Secondary School
          </h1>
          <div id="about-school" className="section">
            {generateQuote()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
