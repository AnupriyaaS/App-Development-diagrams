import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='hole'>
      
    <div className="home-container">
   
    <header>
    
    <h2 class="logo">TAMHSS</h2>
        <nav class="navigation">
            <button type="submit" className="button-login"><Link to="/userlogin">Login</Link></button>
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

export default Home;
