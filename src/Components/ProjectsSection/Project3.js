import React from 'react'
// import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';

export default function Project3() {
  return (
    <StyledProject backgroundColor="#f5b700">
        <ProjectContainer>
            <img src={require("../../images/mbdtf.jpg")} alt="mbdtf.jpeg" height={300} width={300}/>
            <ProjectsDescription>Test description 3</ProjectsDescription>
        </ProjectContainer>
        
    </StyledProject>    
  )
}

