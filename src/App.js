import './App.css';
import HeaderCom from './Components/Header/HeaderCom';
import React, { useState } from 'react';
import { GlobalStyles } from './styles/global';
import {lightTheme, darkTheme} from './themes'


import { Container } from './styles/Container.style';
import HeroSection from './Components/Hero/HeroSection';

import 'animate.css'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';



function App() {
  const [darkMode, setDarkMode] = useState(false);


  const updateTheme = () => {
    setDarkMode(previous=>!previous)
  }

  return (
      <>

      <GlobalStyles mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/>
      
      <Container mode={darkMode} theme={darkMode ? darkTheme : lightTheme}>

        <HeaderCom changeTheme={updateTheme}  mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/>
        
        <HeroSection />

        <ProjectsSection mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/>
        
      </Container>
      
      </>
  );
}

export default App;
