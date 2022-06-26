import React from 'react'
import styled from 'styled-components'

export default function AboutSection() {
  return (

    <AboutContainer>
        About Container 
        <Resume> Resume </Resume>
    </AboutContainer>


  )
}


const AboutContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    border: 1px solid ${(props) => props.theme.fontColor};
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Resume = styled.div`
    display: flex;
    height: 80%;
    width: 90%;
    border: 1px solid ${(props) => props.theme.fontColor};
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;


`