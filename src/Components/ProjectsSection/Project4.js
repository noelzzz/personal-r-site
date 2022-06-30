import React from 'react'
// import styled from 'styled-components'
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
            <img src={require("../../images/tooLate.jpg")} alt="tooLate.jpeg" height={300} width={300}/>
            <ProjectsDescription>Test description 4</ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>
  )
}

