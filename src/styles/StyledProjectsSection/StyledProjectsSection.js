import styled from "styled-components";


export const StyledProjectsSection = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    vertical-align: middle;
    transition: inherit;
    box-sizing: border-box;
    /* background-color: ${(props) => props.theme.header}; */
    overflow-x: scroll;

    /* border: 1px solid ${(props) => props.theme.fontColor}; */


    -ms-overflow-style: none;  //Internet Explorer 10+
    scrollbar-width: none;  /* Firefox */


    &:-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }


     /* Hide scrollbar for Chrome, Safari and Opera */
    &:-webkit-scrollbar {
        display: none;
    } 
`