import React from 'react'
import '../CSS/Schedule.css'
import { useNavigate } from 'react-router-dom';

const Schedule = () => {

    const navigate = useNavigate();

    const handleNavigationClick = (path) => {
        navigate(path);
    };  

  return (
    <div className="schedule-payment-container">
    <form action="/schedule-payment" method="post">
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
        <div className="form-group">
            <label htmlFor="schedule-date">Schedule Date</label>
            <input type="date" id="schedule-date" name="schedule_date" required />
        </div>
        <button type="submit" className="schedule-button">Schedule Payment</button>
    </form>
    
    <button className="back-btn" onClick={() => handleNavigationClick('/private')}>
        Private
    </button>
</div>

  )
}

export default Schedule