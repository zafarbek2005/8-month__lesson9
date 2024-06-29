import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { AiOutlineMenu } from "react-icons/ai"; // Menu icon qo'shildi
import React, { useState } from 'react';
import Logo from './Logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="Navbar container">
          <div className="logo">
         <a href="/">
           <img src={Logo} alt="Logo" />
          </a>
          </div>

          <div className={`items ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="#">Brands</a>
            <a href="#">Recent Products</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
          </div>

          <div className="items_left">
            <span><AiOutlineSearch /></span>
            <a href="/login">
            <span><BsFillPersonFill /></span>
              </a>
            <span><AiOutlineShoppingCart /></span>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <AiOutlineMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;
