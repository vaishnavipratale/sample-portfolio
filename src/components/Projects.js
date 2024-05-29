// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ProjectsText = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsText>
        <ul>
          <li><strong>Project 1:</strong> Developed an e-commerce platform using React and Node.js, increasing online sales by 30%.</li>
          <li><strong>Project 2:</strong> Created a responsive portfolio website to showcase my skills and projects, leveraging HTML, CSS, and JavaScript.</li>
          <li><strong>Project 3:</strong> Implemented a dynamic blog application with React and Firebase, enabling real-time updates and user authentication.</li>
        </ul>
      </ProjectsText>
    </ProjectsContainer>
  );
};

export default Projects;
