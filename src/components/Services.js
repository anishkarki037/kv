import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const ServicesTitle = styled.h2`
  color: #004aad;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceItem = styled.li`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
`;

function Services() {
  const services = [
    "Mystery Shopper Services",
    "Research and Development",
    "Hospitality Performance and Management Consulting",
    "Business Proposal Crafting",
    "Business Consulting",
    "Event Management",
    "Business Setup and Market Research",
    "IT Consulting"
  ];

  return (
    <ServicesContainer>
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesList>
        {services.map((service, index) => (
          <ServiceItem key={index}>{service}</ServiceItem>
        ))}
      </ServicesList>
    </ServicesContainer>
  );
}

export default Services;