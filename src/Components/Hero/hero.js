import { StyledHero } from '../../styles/Hero/StyledHero';
import { AboutMeText } from '../../styles/Hero/StyledAboutMeText';
import {HeroImage} from '../../styles/Hero/StyledHeroImage';
import { Fade } from 'react-reveal';
import 'animate.css'


function Hero(props) {
    return ( 


        // <Fade top cascade>
            <StyledHero>


                <Fade cascade>

                    <HeroImage>
                            <img src={require("../../images/gkmcAlbum.jpeg")} alt="damnAlbum.jpeg" height={300} width={300}/>
                    </HeroImage>


                    <AboutMeText>

                        <Fade top cascade>
                            <h1>Hello there,</h1>
                            My name is Noel & welcome to my page. Here I showcase some of my work as a Front End Software Engineer and UI/UX Designer.
                        </Fade>

                    </AboutMeText>

                </Fade>
            </StyledHero>
        
    );
}

export default Hero;