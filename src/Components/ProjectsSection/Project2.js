import React from 'react'
import styled from 'styled-components'
import { ProjectsDescription } from '../../styles/StyledProjectsSection/ProjectsDescription.Style';
import { ProjectContainer } from '../../styles/StyledProjectsSection/ProjectContainer.style';
import { StyledProject } from '../../styles/StyledProjectsSection/StyledProject';

export default function Project2(props) {

  const handleMouseEnter = () =>{
    props.changeColorTheme('project2')
  }
  
  const handleMouseLeave = () =>{
    props.changeThemeLeave()
  }

  // backgroundColor="#9EE493"

  return (

    <StyledProject onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProjectContainer>
            <img src={require("../../images/lonelyHearts.jpg")} alt="lonelyHearts.jpeg" height={300} width={300}/>
            <ProjectsDescription>
              <ProjectTitle>Machismo Web Poster</ProjectTitle>
              <ProjectDetails>With the theme of resistance, I made this web poster made with simple html/css and Javascript that speaks about the dangerous consequencesof machismo and misogyny in Latin America</ProjectDetails> 
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



// const CreditLine = styled.p`
//   color: currentColor;
//   text-decoration: none;
//   width: 80%;
//   margin: 0;
//   /* border: 1px solid ${(props) => props.theme.fontColor}; */


//   a{

//   }
// `