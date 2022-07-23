import './App.css';
import HeaderCom from './Components/Header/HeaderCom';
import React, { useState,useEffect } from 'react';
import { GlobalStyles } from './styles/global';
import {lightTheme, darkTheme} from './themes'
import HeroSection from './Components/Hero/HeroSection';
import 'animate.css'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import FooterCom from './Components/Footer/FooterCom';
import { useRef } from "react";






function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const noelRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();


  // const [sectionActive, setSectionActive] = useState('noel');

  // const changeNavActive = () =>{
  //   if()
  // }



  const handleNoelClick = () =>{
    noelRef.current.scrollIntoView({behavior:'smooth'})

  }

  const handleProjectsClick = () =>{
    projectRef.current.scrollIntoView({behavior:'smooth'})
  }

  const handleAboutClick = () =>{
    // console.log('fuck the police again')
    aboutRef.current.scrollIntoView({behavior:'smooth'})
  }

  const handleContactClick = () =>{
    contactRef.current.scrollIntoView({behavior:'smooth'})
  }

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



  // const heroRef = useRef(null); //represents main section
  // const projectsRef = useRef(null); //represents about section
  // const aboutRef = useRef(null); //represents how to use section
  // const contactRef = useRef(null); //represents how to use section


 




  return (
      <>
      
      <GlobalStyles mode={darkMode} theme={currentTheme}/>

      <HeaderCom changeMode={updateMode} 
        onNoelClick={handleNoelClick} 
        onProjectsClick={handleProjectsClick} 
        onAboutClick={handleAboutClick} 
        onContactClick={handleContactClick}
        mode={darkMode} 
        theme={currentTheme}
        />

      <HeroSection ref={noelRef}/>

      <ProjectsSection 
        ref={projectRef} 
        mode={darkMode} 
        theme={darkMode ? darkTheme : lightTheme} 
        changeColorTheme={changeColorTheme} 
        changeThemeLeave={changeThemeLeave} 
        currentTheme={currentTheme}/>

      <AboutSection  
        ref={aboutRef} 
        changeColorTheme={changeColorTheme} 
        changeThemeLeave={changeThemeLeave} 
        currentTheme={currentTheme}/>

      <ContactSection ref={contactRef} theme={currentTheme}/>

      <FooterCom/>

        
      </>
  );
}

export default App;



