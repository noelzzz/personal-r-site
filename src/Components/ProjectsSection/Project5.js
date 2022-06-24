import React from 'react'
// import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';

export default function Project5() {
  return (
    <StyledProject backgroundColor="#5e548e">
        <ProjectContainer>
            <img src={require("../../images/feelSpecial.jpg")} alt="feelSpecial.jpeg" height={300} width={300}/>
            <ProjectsDescription>Test description 5</ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>
  )
}

