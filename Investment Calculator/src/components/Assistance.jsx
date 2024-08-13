import React from 'react'
import '../CSS/Assistance.css'
import { useNavigate } from 'react-router-dom';

const Assistance = () => {

    const navigate = useNavigate();

    const handleNavigationClick = (path) => {
        navigate(path);
    };  

  return (<>
    <div className="assistance-container">
    Email: <a href="assistance@zinnabank.co.uk">assistance@zinnabank.co.uk</a>
        <br/>
        Phone: 0751 - 1234567
            <button className="back-btn" onClick={() => handleNavigationClick('/private')}>
                Private
            </button>
    </div>
    
</>)
}

export default Assistance