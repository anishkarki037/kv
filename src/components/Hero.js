import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #bbe609;
  color: #004aad;
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Empowering Your Business To Succeed</HeroTitle>
      <HeroSubtitle>Grow Your Business With Tailored Strategies</HeroSubtitle>
    </HeroContainer>
  );
}

export default Hero;