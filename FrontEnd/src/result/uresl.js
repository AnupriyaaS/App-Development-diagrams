import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('ID:', id);
    
    setId('');
  };

  return (
    <div className='image'>
    <div className="login-container">
    <div className='content' style={{marginTop:'50%'}}>
      <h1>Result Entry</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            required
          />
        </div>
        
        <Link to="/results"><button type="submit" className="login-btn">Submit</button></Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
