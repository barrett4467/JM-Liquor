import React from "react";
import styled from "styled-components";

import SearchBar from "../Search Bar";


function Nav() {
  const Section = styled.div`
    display: flex; 
    margin: -9px;
    background-color: #151f3b;
    justify-content: space-between;
  `
  const Title = styled.a`
    color: #d9b927;
    font-size: 1.75em;
    text-decoration: none;
  `
  const NavLinks = styled.div`
    justify-content: space-between;
    margin-top: 2%;
  `
  const Link = styled.a`
    color: #d9b927;
    text-decoration: none
  
  `
  return (
    <nav>
      <Section>
        <SearchBar />
        <Title href="/">
              J&M Liquor
        </Title>
        <NavLinks>
          <Link href="products">View Products</Link>
        </NavLinks>
        <NavLinks>
          <Link href="cart">View Cart</Link>
        </NavLinks>  
        <NavLinks>
          <Link href="contact">Find Us</Link>
        </NavLinks>

      </Section>
    </nav>
  );
}

export default Nav;
