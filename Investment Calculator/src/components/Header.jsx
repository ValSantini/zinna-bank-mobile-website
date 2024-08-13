import React from 'react'
import logo from '../assets/zinna-bank-logo-zip-file/png/logo-color.png'
import '../CSS/Header.css'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header