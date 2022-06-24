import React from 'react'
// import styled from "styled-components";
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';


export default function Project1(props) {
  return (
    <>
    <StyledProject className={props.className} backgroundColor="#eb4034">
      <ProjectContainer>
        <img src={require("../../images/damnAlbum.jpeg")} alt="damnAlbum.jpeg" height={300} width={300}/>
        <ProjectsDescription><h1>Damn.</h1><br /> This is an album by Kendrick Lamar released in 2017</ProjectsDescription>
      </ProjectContainer>
      
    </StyledProject>
    </>

  )
}
