import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animations in milliseconds
  easing: 'ease-in-out', // Easing function for animations
});

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
