import { StyledHeroSection } from '../../styles/Hero/StyledHeroSection';
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
import { AboutMeText } from '../../styles/Hero/StyledAboutMeText';
import { HeroImage } from '../../styles/Hero/StyledHeroImage';
import { Fade } from 'react-reveal';
import 'animate.css'
import { HeroContainer } from '../../styles/Hero/HeroContainer';


function HeroSection(props) {
    return ( 
        <StyledHeroSection>
           
            
            <HeroContainer>
                    
                <HeroImage>
                    <Fade duration="2000" cascade>
                        <img src={require("../../images/gkmcAlbum.jpeg")} alt="gkmcAlbum.jpeg"/>
                    </Fade>
                </HeroImage>

                <AboutMeText>
                    <Fade top cascade>
                        <h1>Hello there,</h1>
                    </Fade>
                    <Fade cascade>
                        My name is Noel & welcome to my page. Here I showcase <br/>some of my work as a Front End Software <br /> Engineer and UI/UX Designer.
                    </Fade>
                </AboutMeText>
            </HeroContainer>
            
        </StyledHeroSection>
        
    );
}

export default HeroSection;