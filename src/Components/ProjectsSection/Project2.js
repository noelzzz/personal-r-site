import React from 'react'
// import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';

export default function Project2() {
  return (
    <>
    <StyledProject backgroundColor="#3DDC84">
        <ProjectContainer>
            <img src={require("../../images/lonelyHearts.jpg")} alt="lonelyHearts.jpeg" height={300} width={300}/>
            <ProjectsDescription>Test description 2</ProjectsDescription>
        </ProjectContainer>
    </StyledProject>
    </>
  )
}

