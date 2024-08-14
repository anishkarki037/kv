import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/kvlogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="KV Logo" />
          <h3>Key Ventures Business and Management Consultancy</h3>
          <p>Empowering Your Business To Succeed</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="banner" smooth={true} className="footer-link">Home</Link></li>
            <li><Link to="why-choose-us" smooth={true} className="footer-link">Why Us</Link></li>
            <li><Link to="our-services" smooth={true} className="footer-link">Services</Link></li>
            <li><Link to="testimonials" smooth={true} className="footer-link">Testimonials</Link></li>
            <li><Link to="about-us" smooth={true} className="footer-link">About</Link></li>
            <li><Link to="contact-us" smooth={true} className="footer-link">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>98-xxxxxxxx</p>
          <p>info@company.com</p>
          <p>Address, Kathmandu, Nepal</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Key Ventures Business and Management Consultancy. All rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
