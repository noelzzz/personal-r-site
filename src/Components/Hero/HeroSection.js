import { StyledHeroSection } from '../../styles/Hero/StyledHeroSection';
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
import  AboutMeText  from '../../styles/Hero/StyledAboutMeText';
import { HeroImage } from '../../styles/Hero/StyledHeroImage';
import { forwardRef } from 'react';
import { Fade } from 'react-reveal';
import 'animate.css'
import { HeroContainer } from '../../styles/Hero/HeroContainer';
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

                <AboutMeText/>
            </HeroContainer>
            
        </StyledHeroSection>
        
    );
}

export default forwardRef(HeroSection);