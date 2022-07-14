import React,{ forwardRef } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';




function ContactSection(props,ref)  {
    return ( 
    <Fade>
    <ContactContainer ref={ref}>
        
        <ContactSpace>

            <ContactTextContainer>
                
                <ContactNavItem>
                    <a href="https://www.linkedin.com/in/noel-alfaro333">
                        LinkedIn
                    </a>
                </ContactNavItem>
                
                
                <ContactNavItem>
                    <a href="https://github.com/noelzzz">
                        GitHub
                    </a>
                </ContactNavItem>
                
                <ContactNavItem>
                    Email
                </ContactNavItem>
            </ContactTextContainer>



            <SvgContainer>

            <a href="https://www.linkedin.com/in/noel-alfaro333">    
            <svg viewBox="0 0 128 128" fill="currentColor">
                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
            </svg>
            </a>

            <a href="https://github.com/noelzzz">
            <svg fill="currentColor" viewBox="0 0 30 30">    
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
            </svg>
            </a>


            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            </SvgContainer>

    

        </ContactSpace>
    </ContactContainer> 
    </Fade>

    );
}

/* Designed & built by Noel using React.js */
export default forwardRef(ContactSection);



const ContactContainer = styled.div`
    display: grid;
    height: 90vh;
    width: 100vw;
    flex-direction: row;
    place-items: center;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
`


const ContactSpace = styled.div`
    width: 30%;
    height: 80%;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
`


const ContactTextContainer = styled.div`
    width: fit-content;
    height: 80%;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const ContactNavItem = styled.div`
    font-size: 28px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        
    }

    a{
        text-decoration: none;
    }

    
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
`

const SvgContainer = styled.div`
  width: fit-content;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  /* border: 1px solid ${(props) => props.theme.fontColor}; */
  svg{
    cursor: pointer;
      height: 74px;
      width: 74px;
    }
`