import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../img/kvlogo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className=''>
      <div className='nav '>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-item ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="banner" smooth={true} onClick={toggleMenu}>Home</Link></li>
            <li><Link to="why-choose-us" smooth={true} onClick={toggleMenu}>Why Choose Us</Link></li>
            <li><Link to="our-services" smooth={true} onClick={toggleMenu}>Our Services</Link></li>
            <li><Link to="testimonials" smooth={true} onClick={toggleMenu}>Testimonials</Link></li>
            <li><Link to="about-us" smooth={true} onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="contact-us" smooth={true} onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
