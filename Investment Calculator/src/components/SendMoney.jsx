import React from 'react'
import '../CSS/SendMoney.css'
import { useNavigate } from 'react-router-dom';

function SendMoney() {

    const navigate = useNavigate();

    const handleNavigationClick = (path) => {
        navigate(path);
    };  

    return (
        <div className="money-container">
            <form action="/send-money" method="post">
                <div className="form-group">
                    <label htmlFor="recipient-name">Recipient Name</label>
                    <input type="text" id="recipient-name" name="recipient_name" placeholder="Enter recipient's name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-account">Recipient Account Number</label>
                    <input type="text" id="recipient-account" name="recipient_account" placeholder="Enter account number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder="Enter amount to send" required />
                </div>
                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <select id="currency" name="currency" required>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
                <button type="submit" className="send-button">Send Money</button>
            </form>
            
            <button className="back-btn" onClick={() => handleNavigationClick('/private')}>
           Private
            </button>
        </div>
    );
}

export default SendMoney;