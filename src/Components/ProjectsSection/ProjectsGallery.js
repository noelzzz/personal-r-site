import React from 'react'
import { StyledProjectsGallery } from '../../styles/StyledProjectsSection/StyledProjectsGallery'
import Project1 from './Project1'
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5'
import { Fade } from 'react-reveal';
// import styled from 'styled-components';

export default function ProjectsGallery(props) {

  // const changeColorTheme= () =>{
  //   props.changeColorTheme()
  // }

  // const changeThemeLeave= () =>{
  //   props.changeThemeLeave()
  // }

  return (
    <Fade cascade>
      <StyledProjectsGallery>

        {/* <StyledProject1/> */}
        <Project1 changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}/>
        {/* <StyledProject2/> */}
        <Project2 changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}/>
        {/* <StyledProject3/> */}
        <Project3 changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}/>
        {/* <StyledProject4/> */}
        <Project4 changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}/>
        {/* <StyledProject5/> */}
        <Project5 changeColorTheme={props.changeColorTheme} changeThemeLeave={props.changeThemeLeave}/>

      </StyledProjectsGallery>
    </Fade>
  )
}


// const StyledProject1 = styled.div`
//   height: 80%;
//   width: 50vw;
//   margin: 10px;
//   background-color: #eb4034;
//   border: 2px solid ${(props) => props.theme.fontColor} ;
//   color: ${(props) => props.theme.fontColor} ;
//   border-radius: 10px;
//   transition: inherit;
//   transition: transform 0.2s ease-in-out;


//   &:hover{
//     transform: scale(101%);
//   }

// `

// const StyledProject2 = styled.div`
//   height: 80%;
//   width: 50vw;
//   margin: 10px;
//   background-color: #3DDC84;
//   border: 2px solid ${(props) => props.theme.fontColor} ;
//   border-radius: 10px;
//   transition: all .2s linear;
//   transition: transform 0.2s ease-in-out;


//   &:hover{
//     transform: scale(101%);
//   }
// `
// const StyledProject3 = styled.div`
//   height: 80%;
//   width: 50vw;
//   margin: 10px;
//   background-color: blue;
//   border: 2px solid ${(props) => props.theme.fontColor} ;
//   border-radius: 10px;
//   transition: all .2s linear;

//   transition: transform 0.2s ease-in-out;


//   &:hover{
//     transform: scale(101%);
//   }
// `

// const StyledProject4= styled.div`
// height: 80%;
// width: 50vw;
// margin: 10px;
// background-color: purple;
// border: 2px solid ${(props) => props.theme.fontColor} ;
// border-radius: 10px;
// transition: all .2s linear;

// transition: transform 0.2s ease-in-out;


//   &:hover{
//     transform: scale(101%);
//   }
// `

// const StyledProject5= styled.div`
// height: 80%;
// width: 50vw;
// margin: 10px;
// background-color: darkcyan;
// border: 2px solid ${(props) => props.theme.fontColor} ;
// border-radius: 10px;
// transition: inherit;

// transition: transform 0.2s ease-in-out;


//   &:hover{
//     transform: scale(101%);
//   }
// `