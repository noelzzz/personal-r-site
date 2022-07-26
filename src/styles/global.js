import { createGlobalStyle } from 'styled-components';
// import { darkTheme } from '../themes';

export const GlobalStyles = createGlobalStyle`
  *,*:before,*:after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 300px;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: ${(props) => props.theme.fontColor};
    font-family: 'Syne', sans-serif;
  }

  button{
    font-family: 'Syne', sans-serif;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  }


/* 
  a:after{
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.fontColor};
    height: 3px;
    width: 100%;

  } */


`