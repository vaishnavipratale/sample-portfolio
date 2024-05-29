// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
      I'm an undergrad, self taught web developer from Pune, India. I possess skilled talent and immense experience in creating and maintaining visually appealing and user-friendly websites. I have comprehensive knowledge of various web development technologies such as HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Firebase and more.

      </AboutText>
    </AboutContainer>
  );
};

export default About;
