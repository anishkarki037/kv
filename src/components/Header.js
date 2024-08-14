import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #004aad;
  color: white;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>KV</Logo>
        <NavLinks>
          <NavItem>Home</NavItem>
          <NavItem>Why Us</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Testimonials</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact Us</NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;