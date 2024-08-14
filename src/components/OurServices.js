import React from 'react';
import ser1 from '../img/sewvice1.jpg'
import ser2 from '../img/service2.jpg'
import ser3 from '../img/service3.jpg'
import ser4 from '../img/ser4.jpg'
import ser5 from '../img/ser5.jpg'
import ser6 from '../img/ser6.jpg'
import ser7 from '../img/ser7.jpeg'
import ser8 from '../img/ser8.jpeg'

function OurServices() {
    const services = [
      {
        title: "Mystery Shopper Services",
        description: "Gain valuable insights into your customer experience through our mystery shopping services.",
        image: ser1
      },
      {
        title: "Research and Development",
        description: "Drive innovation with our cutting-edge research and development solutions.",
        image: ser2
      },
      {
        title: "Hospitality Performance and Management Consulting",
        description: "Optimize your hospitality business with our expert consulting services.",
        image: ser3
      },
      {
        title: "Business Proposal Crafting",
        description: "Win more business with our professionally crafted business proposals.",
        image: ser4
      },
      {
        title: "Business Consulting",
        description: "Get strategic advice to grow and improve your business operations.",
        image: ser5
      },
      {
        title: "Event Management",
        description: "Create memorable events with our comprehensive event management services.",
        image: ser6
      },
      {
        title: "Business Setup and Market Research",
        description: "Launch your business successfully with our setup assistance and market insights.",
        image: ser7
      },
      {
        title: "IT Consulting",
        description: "Leverage technology to drive your business forward with our IT consulting services.",
        image: ser8
      }
    ];
  
    return (
      <section id='our-services'className="services">
        <div className="container">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card"data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default OurServices;