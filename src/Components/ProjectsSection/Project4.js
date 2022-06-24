import React from 'react'
// import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';

export default function Project4() {
  return (
    <StyledProject backgroundColor="#fb5607">
        <ProjectContainer>
            <img src={require("../../images/tooLate.jpg")} alt="tooLate.jpeg" height={300} width={300}/>
            <ProjectsDescription>Test description 4</ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>
  )
}

