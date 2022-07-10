import React from 'react'
// import { Link } from 'react-router-dom';
import {StyledProjectsSection} from '../../styles/StyledProjectsSection/StyledProjectsSection'
import ProjectsGallery from './ProjectsGallery';
// import { Fade } from 'react-reveal';

export default function ProjectsSection(props) {

  // const Projects = props.Projects;

  return (
    
    <StyledProjectsSection>
        
      <ProjectsGallery changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave} darkTheme={props.darkTheme} currentTheme={props.currentTheme}></ProjectsGallery>
 
    </StyledProjectsSection>
   
  )
}
