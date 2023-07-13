import React, { useState } from 'react';
import './LoginForm.css';
import Home1 from './Home1';
import {Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    
    // Reset form
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className='image'>
    <div className="login-container">
    <div className='content' style={{marginTop:'50%'}}>
      <h1>User Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <Link to="/home1"><button type="submit" className="login-btn">Login</button></Link>
        <div class="create-account">
            <p><Link to="/admin"><a class="register-link">Admin Login</a></Link></p>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
