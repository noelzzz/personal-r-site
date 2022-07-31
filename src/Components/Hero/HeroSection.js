import { StyledHeroSection } from '../../styles/Hero/StyledHeroSection';
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
// import  AboutMeText  from '../../styles/Hero/StyledAboutMeText';
// import { HeroImage } from '../../styles/Hero/StyledHeroImage';
import { forwardRef } from 'react';
import { Fade } from 'react-reveal';
import 'animate.css'
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
// import { Intro } from '../../styles/Hero/Intro';


function HeroSection(props,ref) {

    return ( 
        <StyledHeroSection ref={ref}>
           
            
            <HeroContainer>
                    
                <HeroImage>
                    <Fade cascade>
                        <img src={require("../../images/gkmcAlbum.jpeg")} alt="gkmcAlbum.jpeg"/>
                    </Fade>
                </HeroImage>

                <AboutMeText><Fade top cascade><h1>Hey there,</h1></Fade> <Fade>My name is Noel & welcome to my page. Here I showcase some of my work as a Front-End Software Developer and UI/UX Designer.</Fade></AboutMeText>

            </HeroContainer>
            
        </StyledHeroSection>
        
    );
}

export default forwardRef(HeroSection);




const HeroContainer = styled.div`
  /* border: 1px solid ${(props) => props.theme.fontColor};  */
    /* width: 800px; */
    width: 70%;
    height: 80%;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-evenly;
    /* justify-content: ; */
    /* background-color: red; */


    @media ${device.desktopL}  {
        border: 1px solid ${(props) => props.theme.fontColor};
        width: 50%;
    }


    @media  ${device.laptop}{
        /* flex-direction: column; */
        /* width: 300px; */
        width: 100%;
        height: 60%;
    }

    @media  ${device.tablet}{
        /* flex-direction: column; */
        width: 100%;
        /* width: 300px; */
    }


    @media  ${device.mobileM}{
        /* flex-direction: column; */
        width: 100%;
        height: 70%;
        /* width: 300px; */
    }
`


const AboutMeText = styled.div`
  /* width: fit-content; */
    width: 50%;
    /* min-width: 350px; */
    /* height: 100%; */
    height: fit-content;
    padding: 10px;
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

    p{
        /* border: 1px solid ${(props) => props.theme.fontColor}; */
        line-height: 2;
        text-align: center;
        word-break: keep-all;
        white-space: pre-wrap;
    }

    @media ${device.desktopL}  {
        width: 45%;
        border: 1px solid ${(props) => props.theme.fontColor};
    }


    @media ${device.tablet}{
        /* width: 100px; */
        /* height: 150px; */
        width: 60%;
        font-size: 12px;
        /* border: 1px solid ${(props) => props.theme.fontColor}; */

        h1{
            font-size: 28px;
        }


        p{
        /* border: 1px solid ${(props) => props.theme.fontColor}; */
        line-height: 2;
        text-align: center;
        word-break: keep-all;
        white-space: pre-wrap;
    }
    }

    @media ${device.mobileL}{
        /* width: 100px; */
        /* height: 150px; */
        width: 50%;
        height: 50%;
        font-size: 10px;
        /* border: 1px solid ${(props) => props.theme.fontColor}; */

        h1{
            font-size: 20px;
        }
    }


    @media ${device.mobileM} {
        width: 60%;
    }


`


const HeroImage = styled.div`
    width: 50%;
    cursor: pointer;
    /* height: fit-content; */
    /* padding: 2%; */
    /* line-height: 2.5; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    /* align-items: center; */
    /* margin-left: 50px; */
    /* color: blue; */
    /* background-image: url(../images/damnAlbum.jpeg); */
    

    img{
        border-radius: 5px;
        width: 300px;
        height: 300px;
    }


    @media ${device.desktopL}  {
        border: 1px solid ${(props) => props.theme.fontColor};
        width: 40%;
    }

    @media ${device.laptop} {
        flex-direction: column;
        width: 50%;


        img{
            width: 300px;
            height: 300px;
        }
    }


    @media ${device.tablet} {
        flex-direction: column;
        width: 50%;


        img{
            width: 225px;
            height: 225px;
        }
    }


    @media ${device.tabletS} {
        img{
            width: 150px;
            height: 150px;
        }
    }



    @media ${device.mobileL} {
        flex-direction: column;
        width: 50%;


        img{
            width: 150px;
            height: 150px;
            /* width: fit-content; */
        }
    }



    @media ${device.mobileM} {
        flex-direction: column;
        width: 40%;


        img{
            width: 125px;
            height: 125px;
            /* width: fit-content; */
        }
    }

    @media ${device.mobileS} {
        flex-direction: column;


        img{
            width: 100px;
            height: 100px;
            /* width: fit-content; */
        }
    }

    
`