import { StyledHeroSection } from '../../styles/Hero/StyledHeroSection';
// import { HeroContainer } from '../../styles/Hero/HeroContainer';
import  AboutMeText  from '../../styles/Hero/StyledAboutMeText';
import { HeroImage } from '../../styles/Hero/StyledHeroImage';
import { Fade } from 'react-reveal';
import 'animate.css'
import { HeroContainer } from '../../styles/Hero/HeroContainer';
// import { Intro } from '../../styles/Hero/Intro';


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
                    <Fade cascade>
                        <img src={require("../../images/gkmcAlbum.jpeg")} alt="gkmcAlbum.jpeg"/>
                    </Fade>
                </HeroImage>

                <AboutMeText/>
            </HeroContainer>
            
        </StyledHeroSection>
        
    );
}

export default HeroSection;