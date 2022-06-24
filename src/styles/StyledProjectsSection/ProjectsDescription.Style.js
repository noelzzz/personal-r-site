import styled from "styled-components";

export const ProjectsDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    width: 50%;

    /* background-color: aliceblue; */
    border: 1px solid ${(props) => props.theme.fontColor};


    h1{
        padding: none;
        margin: none;
        font-size: 32px;
    }
  
`;