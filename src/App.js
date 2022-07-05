import './App.css';
import HeaderCom from './Components/Header/HeaderCom';
import React, { useState,useEffect } from 'react';
import { GlobalStyles } from './styles/global';
import {lightTheme, darkTheme} from './themes'
import { Container } from './styles/Container.style';
import HeroSection from './Components/Hero/HeroSection';
import 'animate.css'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { Fade } from 'react-reveal';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const updateMode = () => {
    setDarkMode(previous=>!previous)
  }

 

  const changeColorTheme = (projectTheme) => {
    setCurrentTheme(projectTheme)
  }

  const changeThemeLeave = () => {

    if(darkMode){
      setCurrentTheme(darkTheme)
    }else{
      setCurrentTheme(lightTheme)
    }
  }

  useEffect(()=>{
      if(darkMode){
        setCurrentTheme(darkTheme)
      }else{
        setCurrentTheme(lightTheme)
      }
    },[darkMode])



  return (
      <>
      <GlobalStyles mode={darkMode} theme={currentTheme}/>
      
     
      <Container>

        <HeaderCom changeMode={updateMode}  mode={darkMode} theme={currentTheme}/> 
        
        <HeroSection />

        <ProjectsSection mode={darkMode} theme={darkMode ? darkTheme : lightTheme} changeColorTheme={changeColorTheme} changeThemeLeave={changeThemeLeave} currentTheme={currentTheme}/>

        <AboutSection changeColorTheme={changeColorTheme} changeThemeLeave={changeThemeLeave} currentTheme={currentTheme}/>

        <ContactSection></ContactSection>
        
      </Container>
      
      </>
  );
}

export default App;
