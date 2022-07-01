import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { neiuTheme } from '../../themes'

export default function AboutSection(props) {

  // const handleMouseEnter = () =>{
  //   props.changeColorTheme(neiuTheme)
  // }
  
  // const handleMouseLeave = () =>{
  //   props.changeThemeLeave()
  // }
  



  return (

    <Fade>
      <AboutContainer>
        <Skills> 
            <AboutMeHeader>Skills</AboutMeHeader>
        </Skills>

        <Education > 
          <AboutMeHeader>Education</AboutMeHeader>
        </Education>

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

const Skills = styled.div`
    height: 90%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid ${(props) => props.theme.fontColor};
    border-radius: 12px;
    transition: all .2s linear;

    box-shadow:
                1px 1px #0A0A0A,
                3px 3px #0A0A0A,
                4px 4px #0A0A0A;  
`


const Education = styled.div`
  
  height: 90%;
  width: 35%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 12px;
  transition: all .2s linear; 

  box-shadow:
                1px 1px #0A0A0A,
                3px 3px #0A0A0A,
                4px 4px #0A0A0A;

  /* &:hover{
      transition: transform .1s ease-in-out;
      border: 1.5px solid #0A0A0A;
      background-color:${(neiuTheme.backgroundColor)};
      color: ${(neiuTheme.fontColor)};
      cursor: pointer;
    } */
`

const AboutMeHeader = styled.h1`
  margin: 20px;
`