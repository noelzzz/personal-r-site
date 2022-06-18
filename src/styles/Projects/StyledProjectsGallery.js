import styled from "styled-components";

export const StyledProjectsGallery = styled.div`
    width: 300vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.header};
    transition: all .2s linear;
    box-sizing: border-box;
    position: relative;
    z-index: 5;
    padding: 1%;
    /* border: 2px solid ${(props) => props.theme.fontColor}; */
    
`
