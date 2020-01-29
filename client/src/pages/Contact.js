import React from "react";
import styled from "styled-components";

import Map from "../components/Map";


function Contact() {
  const ContactSec = styled.div`
    display: flex,
    flex-direction: column,
    justify-content: space-between
  `
  const ContactItem = styled.h4`
    margin-left: 410px
  `
  return (
    <>
      <ContactSec>
        <h2>
        Find Us
        </h2>
        <Map />
        <ContactItem>
          <h3>(719)312-1005</h3>
          <h3>106 N Park Street, Manzanola, CO 81058</h3>
          <h4>Monday-Thursday 9AM-10PM</h4>
          <h4>Friday 9AM-12PM</h4>
          <h4>Saturday 9AM-12PM</h4>
          <h4>Sunday 9AM-9PM</h4>
        </ContactItem>
      </ContactSec>
    </>
  );
}

export default Contact;
