import { StyledHeroSection } from '../../styles/Hero/StyledHeroSection';
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
import { AboutMeText } from '../../styles/Hero/StyledAboutMeText';
import { HeroImage } from '../../styles/Hero/StyledHeroImage';
import { Fade } from 'react-reveal';
import 'animate.css'
import { HeroContainer } from '../../styles/Hero/HeroContainer';


function HeroSection(props) {


    // const handleMouseEnter =()=>{
    //     props.changeColorTheme('project1')
    // }

    // const handleMouseLeave =()=>{
    //     props.changeThemeLeave()
    // }



    // const handleImageEnter=()=>{
    //     props.changeColorTheme('project2')
    // }

    // const handleImageLeave=()=>{
    //     props.changeThemeLeave()

    // }
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