import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import  logo from '../../assets/logo.svg'
import './navbar.css'

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="gpt3__navbar-links_container">
          <a href="#home">Home</a>
          <a href="#wgpt3">What is GPT?</a>
          <a href="#possibility">Open AI</a>
          <a href="#features">Case Studies</a>
          <a href="#blog">Library</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar