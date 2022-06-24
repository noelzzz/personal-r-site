import React from 'react'
import {StyledProjectsSection} from '../../styles/StyledProjectsSection/StyledProjectsSection'
import ProjectsGallery from './ProjectsGallery';

export default function ProjectsSection(props) {

  // const changeColorTheme=()=>{
  //   props.changeColorTheme('project3')
  // }

  // const changeThemeLeave=()=>{
  //   props.changeThemeLeave()
  // }

  return (
    <StyledProjectsSection>
        
      <ProjectsGallery changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}></ProjectsGallery>
 
    </StyledProjectsSection>
  )
}
