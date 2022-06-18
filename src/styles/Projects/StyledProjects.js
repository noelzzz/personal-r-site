import styled from "styled-components";


export const StyledProjects = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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