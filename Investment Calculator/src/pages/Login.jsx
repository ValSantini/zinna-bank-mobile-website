import React from 'react';
import '../CSS/Input.css';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const handleDeckClick = () => {
    navigate('/deck');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="home-container" id="log-in">
      <div className="input-container">
        <input className="log-input" type="text" placeholder="Username" required/>
        <input className="log-input" type="password" placeholder="Password" required/>
      </div>

      <button className="button1" onClick={handleDeckClick}>Log In</button>
      <button className="button" onClick={handleBackClick}>Home</button>
    </div>
  );
};

export default LogIn;
