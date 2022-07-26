import React from 'react'
import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';
import { project4Theme } from '../../themes';


export default function Project4(props) {

  const handleMouseEnter = () =>{
    props.changeColorTheme(project4Theme)
  }
  
  const handleMouseLeave = () =>{
    props.changeThemeLeave()
  }


  // backgroundColor="#26619C"
  
  return (
    <StyledProject  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProjectContainer>
            <img src={require("../../images/tooLate.jpg")} alt="tooLate.jpeg"/>
            <ProjectsDescription>
              <ProjectTitle>Android App</ProjectTitle>
              <ProjectDetails>This is an android app I designed and built meant to emulate a cafe ordering experience, built using kotlin</ProjectDetails> 
              
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