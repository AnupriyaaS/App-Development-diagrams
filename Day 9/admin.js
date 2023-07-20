import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './admin.css';


const AdminLoginForm = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin ID:', adminId);
    console.log('Password:', password);    
    console.log('Remember Me:', rememberMe);

    setAdminId('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className='adminimage'>
    <div className="admin-login-form-container">
      <h1><b>Admin Login</b></h1>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="adminId">Admin ID:</label>
          <input
            type="text"
            id="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Enter your admin ID"
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
        
        <Link to="/home2"><button type="submit" className="admin-login-btn">Login</button></Link>
        <div class="create-account">
            <p><Link to="/login"><a class="register-link">User Login</a></Link></p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
