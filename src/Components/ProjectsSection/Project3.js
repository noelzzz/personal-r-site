import React from 'react'
import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';
import { project3Theme } from '../../themes';


export default function Project3(props) {

  const handleMouseEnter = () =>{
    props.changeColorTheme(project3Theme)
  }
  
  const handleMouseLeave = () =>{
    props.changeThemeLeave()
  }
  
  
  // backgroundColor="#F4D06F"
  
  return (
    <StyledProject  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProjectContainer>
            <img src={require("../../images/mbdtf.jpg")} alt="mbdtf.jpeg"/>
            <ProjectsDescription>
              <ProjectTitle>Three.js World Menu</ProjectTitle>
              <ProjectDetails>A site simulating what a future with a metaverse might look like where you select to enter into a 3D anime world</ProjectDetails>
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
