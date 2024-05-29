// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactText>
        I'm excited to connect with you! Feel free to reach out to me through the following channels:
        <br /><br />
        <strong>Email:</strong> pratalev@gmail.com
        <br />
        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vaishnavipratale" target="_blank" rel="noopener noreferrer">linkedin.com/in/vaishnavipratale</a>
        <br />
        <strong>GitHub:</strong> <a href="https://github.com/vaishnavipratale" target="_blank" rel="noopener noreferrer">github.com/vaishnavipratale</a>
      </ContactText>
    </ContactContainer>
  );
};

export default Contact;
