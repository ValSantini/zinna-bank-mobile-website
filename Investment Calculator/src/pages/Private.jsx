import React from 'react'
import '../CSS/Private.css';
import { useNavigate } from 'react-router-dom';

const Private = () => {

    const navigate = useNavigate();

    const handleNavigationClick = (path) => {
        navigate(path);
    };    
    
  return (<>
    <div className="private-container">
        <h1>Private</h1>

            <button><span className="span"
            onClick={() => handleNavigationClick('/send-money')}
            >Send money</span></button>

            <button><span className="span"
            onClick={() => handleNavigationClick('/international')}
            >International Payment</span></button>

            <button><span className="span"
            onClick={() => handleNavigationClick('/schedule')}
            >Schedule Payment</span></button>

            <button><span className="span"
            onClick={() => handleNavigationClick('/assistance')}
            >Assistance</span></button>
            
            <button onClick={() => handleNavigationClick('/deck')}>
            <span className="span">Deck</span>
            </button>
    </div>
    </>)
}

export default Private