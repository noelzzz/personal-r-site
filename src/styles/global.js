import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  header{

  }
  

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    /* transition: all .1s linear; */
    /* background-color: #1b263b; */
    color: ${(props) => props.theme.fontColor};
    font-family: 'Syne', sans-serif;
    /* font-weight: 500; */

  }

  button{
    font-family: 'Syne', sans-serif;
  }

  a{
  /* text-decoration: none; */
  color: ${(props) => props.theme.fontColor};
  }


`