import React from 'react'
// import styled from "styled-components";
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';
// import { project1Theme } from '../../themes';


export default function Project1(props) {

const handleMouseEnter = () =>{
  props.changeColorTheme('project1')
}

const handleMouseLeave = () =>{
  props.changeThemeLeave()
}


  return (
    <>
    <StyledProject backgroundColor="#eb4034" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProjectContainer >
        <img src={require("../../images/damnAlbum.jpeg")} alt="damnAlbum.jpeg" height={300} width={300}/>
        <ProjectsDescription><h1>Damn.</h1><br /> This is an album by Kendrick Lamar released in 2017</ProjectsDescription>
      </ProjectContainer>
      
    </StyledProject>
    </>

  )
}
