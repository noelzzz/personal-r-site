import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

export default function AboutSection() {
  return (

    <Fade>
    <AboutContainer>
            <ResumeExperience> 
                <AboutMeHeader>Skills</AboutMeHeader>
            </ResumeExperience>

            <ResumeExperience> 
                <AboutMeHeader>Technologies</AboutMeHeader>
            </ResumeExperience>

            <ResumeExperience> 
                <AboutMeHeader>Education</AboutMeHeader>
            </ResumeExperience>
    </AboutContainer>
    </Fade>

  )
}


const AboutContainer = styled.div`
    display: flex;
    height: 90vh;
    width: 100vw;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;

`

// const Resume = styled.div`
//     display: flex;
//     height: 90%;
//     width: 95%;
//     border: 1px solid ${(props) => props.theme.fontColor};
//     justify-content: space-evenly;
//     align-items: center;
//     flex-direction: row;
//     align-items: center;
// `


const ResumeExperience = styled.div`
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    border-radius: 12px;
    transition: all .2s linear;
    
    /* &:hover{
      transform: scale(104%);
      transition: transform .1s ease-in-out;
      border: 1.5px solid ${(props) => props.theme.fontColor};
      cursor: pointer;
      box-shadow:
          1px 1px #0A0A0A,
          3px 3px #0A0A0A,
          4px 4px #0A0A0A;
    } */



`

const AboutMeHeader = styled.h1`
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
  margin: 5%;
  /* text-decoration: underline;  */
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
`