import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* max-width: 100%; */
    padding: 0 20px;
    margin: 0 auto;
    height: 110vh;
    box-sizing: border-box;
    padding: 0;
    height: 110vh;
    background-color: ${(props) => props.theme.header};
    transition: all .2s linear;
    /* border: 1px solid${(props) => props.theme.fontColor}; */
    border-radius: 4px;
`