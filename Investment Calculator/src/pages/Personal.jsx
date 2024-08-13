import React from 'react'
import '../CSS/Personal.css';
import logo from '../assets/zinna-bank-logo-zip-file/png/temple-logo.png'
import { useNavigate } from 'react-router-dom';

const Personal = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/deck');
      };

  return (
    <div className="personal-container">
            <h1>Personal</h1>
        <div className="sum-up">
            <img src={logo} alt="temple-log" />
            <p className="total-save"><span>Total save</span><span>46,578.00£</span></p>
            <p>Sort-code: 00-00-00</p>
            <p>Account number: 12345678</p>
        </div>
            <h1>Latest movements</h1>
        <div className="latest-movements">
            <div className="movements-list">
                <p className="movement"><span>Payday (today)</span><span>+2500£</span></p>
            </div>

            <div className="movements-list">
                <p className="movement"><span>Tesco (02/07)</span><span>-18£</span></p>
            </div>

            <div className="movements-list">
                <p className="movement"><span>Rent (30/06)</span><span>-950£</span></p>
            </div>
        </div>

        <button>See all movements</button>

        <button onClick={handleBackClick}>Deck</button>
    </div>
  )
}

export default Personal