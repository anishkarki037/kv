import React from 'react';
import { Link } from 'react-scroll';
import kv from '../img/kv.png';

function AboutUs() {
  return (
    <section id="about-us" className='container'>
      <div className='about-con'>
        <h2>About Us</h2>
        <p>At KV, we offer a team of seasoned professionals with extensive industry expertise, delivering customized solutions tailored to your business needs. We pride ourselves on proven results that drive growth and profitability, a client-centric approach that prioritizes your success, and comprehensive services ranging from strategic planning to marketing solutions, all conducted with the highest level of integrity and professionalism.</p>
        <p>At KV, we offer a team of seasoned professionals with extensive industry expertise, delivering customized solutions tailored to your business needs. We pride ourselves on proven results that drive growth and profitability, a client-centric approach that prioritizes your success, and comprehensive services ranging from strategic planning to marketing solutions, all conducted with the highest level of integrity and professionalism.</p><br/>
        <Link to="contact-us" smooth={true} className='btn-primary'>Let's Talk</Link>
      </div>
      <div className='about-img'>
        <img src={kv} alt="KV Team" />
      </div>
    </section>
  );
}

export default AboutUs;
