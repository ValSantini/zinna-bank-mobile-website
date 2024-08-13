
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';
import '../CSS/Button.css'
import BankLogo from '../assets/zinna-bank-logo-zip-file/svg/logo-color.svg';

const Home = () => {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="number-display">
        46,578.00£
      </div> 

      <div className="logo-container">
        <img src={BankLogo} alt="bank logo color" />
      </div>

      
      <button className="button" onClick={handleLogInClick}>Go to<br />Log In</button>
    </div>
  );
};

export default Home;
