import React from 'react';
import '../CSS/Deck.css';
import { useNavigate } from 'react-router-dom';

const Deck = () => {
    const navigate = useNavigate();

    const handleNavigationClick = (path) => {
        navigate(path);
    };

    return (
        <div className="deck-container" id="deck">

            <div className="welcome-message">
                <h2>Welcome back Pete Mitchell!</h2>
            </div>
            
            <h1>Deck</h1>

            <button className="deck-button">
                <span className="span" onClick={() => handleNavigationClick('/investments')}>Investments Calculator</span>
            </button>
            <button className="deck-button" onClick={() => handleNavigationClick('/personal')}>
                <span className="span">Personal</span>
            </button>
            <button className="deck-button" onClick={() => handleNavigationClick('/markets')}>
                <span className="span">Markets Latest</span>
            </button>
            <button className="deck-button">
                <span className="span" onClick={() => handleNavigationClick('/private')}>Private Banking</span>
            </button>
            <button className="deck-button" onClick={() => handleNavigationClick('/')}>
                <span className="span">Home</span>
            </button>
        </div>
    );
};

export default Deck;
