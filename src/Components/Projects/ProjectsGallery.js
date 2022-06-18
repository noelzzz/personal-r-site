import React from 'react'
import { StyledProjectsGallery } from '../../styles/Projects/StyledProjectsGallery'
// import Project1 from './Project1'
import { Fade } from 'react-reveal';
import styled from 'styled-components';

export default function ProjectsGallery(props) {
  return (
    <Fade cascade>
      <StyledProjectsGallery>

        <StyledProject1/>
        <StyledProject2/>
        <StyledProject3/>
        <StyledProject4/>
        <StyledProject5/>

      </StyledProjectsGallery>
    </Fade>
  )
}


const StyledProject1 = styled.div`
  height: 80%;
  width: 50vw;
  margin: 10px;
  background-color: #eb4034;
  border: 1px solid ${(props) => props.theme.fontColor} ;
  border-radius: 4px;
`

const StyledProject2 = styled.div`
  height: 80%;
  width: 50vw;
  margin: 10px;
  background-color: #3DDC84;
  border: 1px solid ${(props) => props.theme.fontColor} ;
  border-radius: 4px;
`
const StyledProject3 = styled.div`
  height: 80%;
  width: 50vw;
  margin: 10px;
  background-color: blue;
  border: 1px solid ${(props) => props.theme.fontColor} ;
  border-radius: 4px;
`

const StyledProject4= styled.div`
height: 80%;
width: 50vw;
margin: 10px;
background-color: purple;
border: 1px solid ${(props) => props.theme.fontColor} ;
border-radius: 4px;
`

const StyledProject5= styled.div`
height: 80%;
width: 50vw;
margin: 10px;
background-color: darkcyan;
border: 1px solid ${(props) => props.theme.fontColor} ;
border-radius: 4px;
`