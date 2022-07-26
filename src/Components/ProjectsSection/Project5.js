import React from 'react'
import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';
import { project5Theme } from '../../themes';


export default function Project5(props) {

  const handleMouseEnter = () =>{
    props.changeColorTheme(project5Theme)
  }
  
  const handleMouseLeave = () =>{
    props.changeThemeLeave()
  }

// backgroundColor="#EAE8FF"

  return (
    <StyledProject  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProjectContainer>
            <img src={require("../../images/TW.jpg")} alt="TW.jpeg"/>
            <ProjectsDescription>
              <ProjectTitle>React App</ProjectTitle>
              <ProjectDetails>This is a react site made in 2022</ProjectDetails> 
            </ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>
  )
}


const ProjectTitle = styled.h1`
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
  margin: 0;
`

const ProjectDetails = styled.p`
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
  width: 90%;
  margin: 10% 0%;
`
