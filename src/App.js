import './App.css';
import HeaderCom from './Components/Header/HeaderCom';
import React, { useState,useEffect } from 'react';
import { GlobalStyles } from './styles/global';
import {lightTheme, darkTheme, project1Theme, project2Theme, project3Theme, project4Theme, project5Theme} from './themes'


import { Container } from './styles/Container.style';
import HeroSection from './Components/Hero/HeroSection';

import 'animate.css'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const updateMode = () => {

    setDarkMode(previous=>!previous)

  }

 

  const changeColorTheme = (project) => {


    if(project==='project1'){
      setCurrentTheme(project1Theme)
    }
    if(project==='project2'){
      setCurrentTheme(project2Theme)
    }
    if(project==='project3'){
      setCurrentTheme(project3Theme)
    }
    if(project==='project4'){
      setCurrentTheme(project4Theme)
    }
    if(project==='project5'){
      setCurrentTheme(project5Theme)
    }
    
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

      {/* <GlobalStyles mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/> */}
      <GlobalStyles mode={darkMode} theme={currentTheme}/>
      
      <Container >
      {/* <Container mode={darkMode} theme={currentTheme}> */}

        {/* <HeaderCom changeTheme={updateTheme}  mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/> */}
        <HeaderCom changeMode={updateMode}  mode={darkMode} theme={currentTheme}/> 
        
        <HeroSection changeColorTheme={changeColorTheme} changeThemeLeave={changeThemeLeave} />

        <ProjectsSection mode={darkMode} theme={darkMode ? darkTheme : lightTheme} changeColorTheme={changeColorTheme} changeThemeLeave={changeThemeLeave}/>
        
      </Container>
      
      </>
  );
}

export default App;
