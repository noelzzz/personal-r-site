import './App.css';
import HeaderCom from './Components/HeaderCom';
import React, { useState } from 'react';
import { GlobalStyles } from './Components/global';
import {lightTheme, darkTheme} from './themes'


import { Container } from './styles/Container.style';
import Hero from './Components/hero';

import 'animate.css'
import Projects from './Components/projects';



function App() {
  const [darkMode, setDarkMode] = useState(false);


  const updateTheme = () => {
    setDarkMode(previous=>!previous)
  }

  return (
      <>
      <GlobalStyles mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/>
      
      {/* <Fade top cascade> */}
      <Container mode={darkMode} theme={darkMode ? darkTheme : lightTheme}>

        <HeaderCom changeTheme={updateTheme}  mode={darkMode} theme={darkMode ? darkTheme : lightTheme}/>
        
        <Hero />

        <Projects />


        
      </Container>
      {/* </Fade> */}
    
      
      


      
  
      </>
  );
}

export default App;
