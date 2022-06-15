import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.header};
    /* background-color: #1b263b; */
    color: ${(props) => props.theme.fontColor};
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }
`