import styled from "styled-components";


export const StyledProject = styled.div`
    height: 80%;
    width: 700px;
    margin: 10px;
    display: flex;
    /* padding: 1%; */
    justify-content: flex-start;
    box-sizing: border-box;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    /* color: ${(props) => props.theme.fontColor}; */
    border-radius: 12px;
    transition: all .2s linear;
    transition: transform 0.2s ease-in-out;

    &:hover{
        /* transform: scale(101%); */
        transition: transform .1s ease-in-out;
        border: 1px solid ${(props) => props.theme.fontColor};
        cursor: pointer;
    }

    
`