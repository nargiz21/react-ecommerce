import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h5>About us</h5>
        <p>Gyan Singh Market, Sector 22 Noida, UP 201301</p>
        <p>Call us now: +91-9871833367</p>
        <p>Email: demofurnive@gmail.com</p>
      </div>
      <div>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
