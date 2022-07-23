import styled from "styled-components";

export const StyledProjectsGallery = styled.div`
    width: 280vw;
    /* min-width: 600px; */
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: all .2s linear;
    box-sizing: border-box;
    position: relative;
    z-index: 5;
    padding: 1%;
    /* border: 2px solid ${(props) => props.theme.fontColor}; */
    
`
