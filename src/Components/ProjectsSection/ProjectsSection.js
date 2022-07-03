import React from 'react'
import {StyledProjectsSection} from '../../styles/StyledProjectsSection/StyledProjectsSection'
import ProjectsGallery from './ProjectsGallery';
import { Fade } from 'react-reveal';

export default function ProjectsSection(props) {

  return (
    <Fade cascade>
    <StyledProjectsSection>
        
      <ProjectsGallery changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave} darkTheme={props.darkTheme} currentTheme={props.currentTheme}></ProjectsGallery>
 
    </StyledProjectsSection>
    </Fade>
  )
}
