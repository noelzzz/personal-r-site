import styled from "styled-components";

export const StyledProjectsGallery = styled.div`
    width: 95vw;
    height: 80vh;
    /* border: 2px solid ${(props) => props.theme.fontColor}; */
    overflow-x: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */


    &:-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }


     /* Hide scrollbar for Chrome, Safari and Opera */
    &:-webkit-scrollbar {
        display: none;
    }

/* Hide scrollbar for IE, Edge and Firefox */
    
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
`
