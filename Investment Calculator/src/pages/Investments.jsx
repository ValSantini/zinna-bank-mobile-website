import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import UserInput from "../components/UserInput"
import Results from "../components/Results"
import '../CSS/Button.css'
import '../CSS/Investments.css'
import '../CSS/Header.css'
import '../CSS/Results.css'
import '../CSS/UserInput.css'
import '../index.css'

const Investments = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/deck');
      };

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }

    const inputIsValid = userInput.initialInvestment > 0 && 
                         userInput.annualInvestment >= 0 && 
                         userInput.expectedReturn > 0 && 
                         userInput.duration > 0;

    return (
        <>
        <div className="invest-container">
        <Header />
            <UserInput 
                userInput={userInput}
                onChange={handleChange} 
            />
            {inputIsValid && <Results input={userInput} />}
            
            <button className="investment-button" onClick={handleBackClick}>Deck</button>
        </div>
        </>
    );
}

export default Investments;
