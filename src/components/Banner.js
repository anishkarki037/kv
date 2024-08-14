import React from 'react';
import { Link } from 'react-scroll';
import banner1 from '../img/banner1.png';
import banner2 from '../img/banner2.png';
import banner3 from '../img/banner3.png';
import banner4 from '../img/banner4.png';

function Banner() {
  return (
    <section id="banner" className='banner container'>
      <div className='banner-left'>
        <h1>Empowering Your Business To <span>Succeed</span></h1>
        <div className='btn'>
          <Link to="contact-us" smooth={true} className='btn-primary'>Contact Us</Link>
          <Link to="our-services" smooth={true} className='btn-secondary'>Explore Our Services</Link>
        </div>
      </div>
      <div className='banner-right'>
        <div className='row'>
          <img src={banner1} alt="Banner 1" data-aos="flip-left" />
          <img src={banner2} alt="Banner 2" data-aos="flip-right" />
        </div>

        <div className='row'>
          <img src={banner3} alt="Banner 3" data-aos="flip-left" />
          <img src={banner4} alt="Banner 4" data-aos="flip-right" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
