import React from 'react'
import { StyledProjectsGallery } from '../styles/StyledProjectsGallery'
import Project1 from './Project1'
import { Fade } from 'react-reveal';

export default function ProjectsGallery() {
  return (
    <Fade cascade>
    <StyledProjectsGallery>
        <Project1/>
    </StyledProjectsGallery>
    </Fade>
  )
}
