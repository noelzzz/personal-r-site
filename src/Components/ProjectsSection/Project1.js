import React from 'react'
import styled from "styled-components";
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';
// import { darkTheme } from '../../themes';
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
    <StyledProject onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProjectContainer >
        <img src={require("../../images/damnAlbum.jpeg")} alt="damnAlbum.jpeg" height={300} width={300}/>
        <ProjectsDescription>
          <ProjectTitle>Project Belmont</ProjectTitle>
          <ProjectDetails>This is a project management tool meant to teach & guide users on building a project with an agile mindset.</ProjectDetails> 
          <CreditLine>Built using React.js in collaboration with <a id='braynDiazCredit' href='https://github.com/bddiaz'>Bryan Diaz</a> </CreditLine>
        </ProjectsDescription>
      </ProjectContainer>
      
    </StyledProject>
    </>

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



const CreditLine = styled.p`
  color: currentColor;
  text-decoration: none;
  width: 80%;
  margin: 0;
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
`