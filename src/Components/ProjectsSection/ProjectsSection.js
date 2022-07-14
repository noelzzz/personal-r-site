import React,{forwardRef} from 'react'
import {StyledProjectsSection} from '../../styles/StyledProjectsSection/StyledProjectsSection'
import ProjectsGallery from './ProjectsGallery';


function ProjectsSection(props,ref) {

  return (
    
    <StyledProjectsSection ref ={ref}>
      <ProjectsGallery changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave} darkTheme={props.darkTheme} currentTheme={props.currentTheme}></ProjectsGallery>
    </StyledProjectsSection>
   
  )
}



export default forwardRef(ProjectsSection);