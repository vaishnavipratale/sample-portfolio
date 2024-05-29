// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #1abc9c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ProfileImage src="/profile.jpg" alt="Profile" />
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>
        Hey, I'm Vaishnavi  
        <br/>
        An India based web developer who crafts captivating digital experiences through responsive designs and interactive UI/UX. Let's create together.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
