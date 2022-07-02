import styled from "styled-components";
import { Fade } from "react-reveal";


export default function AboutMeText() {
    return ( 
        <Fade>
        <StyledAboutMeText>
            <Fade top cascade><h1>Hello there</h1></Fade>
            <Fade cascade>
            My name is Noel & welcome to my page. Here I showcase some of my work as a Front-End Software Engineer and UI/UX Designer.
            </Fade>
        </StyledAboutMeText>
        </Fade>
    );
}



const StyledAboutMeText = styled.div`
    width: 450px;
    min-width: 350px;
    height: 350px;
    padding: 5px;
    line-height: 2;
    font-size: 20px;

    text-align: center;
    word-break: keep-all;
    white-space: pre-wrap;

    display: flex;
    flex-direction: column;
    /* position: relative; */
    justify-content: center;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    align-items: center;    

    h1{
        line-height: 1;
        /* border: 1px solid ${(props) => props.theme.fontColor}; */
        align-items: center;
        font-size: 40px;
    }

    /* p{
        border: 1px solid ${(props) => props.theme.fontColor};
        line-height: 2;
    } */
    


`

// export default AboutMeText;