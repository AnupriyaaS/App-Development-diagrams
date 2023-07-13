import React from 'react';
import './Home1.css';
import {Link} from 'react-router-dom';

// import Home from './Home';

const Home1 = () => {
  return (
    <div className='appbar'>
    <div className="home-containerr">
    <header>
    <h2 class="logo">TAMHSS</h2>
    <nav class="navigation">
            <a href='/assign'>Assignments</a>
            <a href='#Home'>Results</a>
            <a href='#Home'>Profile</a>
            <button type="submit" className="buttonlogout"><Link to="/home">Logout</Link></button>
        </nav>
      </header>
   
      <div className="white-box">
      <h1 className="school-name">Tiny Academy Matriculation Higher Secondary School</h1>
      <div id="about-school" className="section">
        <p>“Education is the key that unlocks the golden door to freedom.” —George Washington Carver</p>
        </div>
        </div>        
      </div>
    </div>
  );
};

export default Home1;
