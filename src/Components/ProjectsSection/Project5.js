import React from 'react'
// import styled from 'styled-components'
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
            <img src={require("../../images/feelSpecial.jpg")} alt="feelSpecial.jpeg"/>
            <ProjectsDescription>Test description 5</ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>
  )
}

