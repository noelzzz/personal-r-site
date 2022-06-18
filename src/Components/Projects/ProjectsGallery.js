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
  border: 2px solid ${(props) => props.theme.fontColor} ;
  border-radius: 10px;
  transition: inherit;
  transition: transform 0.2s ease-in-out;


  &:hover{
    transform: scale(101%);
  }

`

const StyledProject2 = styled.div`
  height: 80%;
  width: 50vw;
  margin: 10px;
  background-color: #3DDC84;
  border: 2px solid ${(props) => props.theme.fontColor} ;
  border-radius: 10px;
  transition: all .2s linear;
  transition: transform 0.2s ease-in-out;


  &:hover{
    transform: scale(101%);
  }
`
const StyledProject3 = styled.div`
  height: 80%;
  width: 50vw;
  margin: 10px;
  background-color: blue;
  border: 2px solid ${(props) => props.theme.fontColor} ;
  border-radius: 10px;
  transition: all .2s linear;

  transition: transform 0.2s ease-in-out;


  &:hover{
    transform: scale(101%);
  }
`

const StyledProject4= styled.div`
height: 80%;
width: 50vw;
margin: 10px;
background-color: purple;
border: 2px solid ${(props) => props.theme.fontColor} ;
border-radius: 10px;
transition: all .2s linear;

transition: transform 0.2s ease-in-out;


  &:hover{
    transform: scale(101%);
  }
`

const StyledProject5= styled.div`
height: 80%;
width: 50vw;
margin: 10px;
background-color: darkcyan;
border: 2px solid ${(props) => props.theme.fontColor} ;
border-radius: 10px;
transition: inherit;

transition: transform 0.2s ease-in-out;


  &:hover{
    transform: scale(101%);
  }
`