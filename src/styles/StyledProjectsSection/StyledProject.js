import styled from "styled-components";


export const StyledProject = styled.div`
    height: 375px;
    width: 700px;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    border-radius: 12px;
    transition: all .2s linear;
    
    a{
        color: ${(props) => props.theme.fontColor};
    }

    img{
        border-radius: 6px;
    }

    &:hover{
        transform: scale(104%);
        transition: transform .1s ease-in-out;
        border: 1.5px solid ${(props) => props.theme.fontColor};
        cursor: pointer;
        box-shadow:
                2px 2px #0A0A0A,
                3px 3px #0A0A0A,
                4px 4px #0A0A0A;

        img{
            transition: transform .2s ease-in-out;
        }      

        a{
        color: ${(props) => props.theme.fontColor};
        transition: all .2s linear;
        }
    }
    
`