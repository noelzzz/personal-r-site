import './App.css';
import HeaderCom from './Components/HeaderCom';
import React, { useState } from 'react';
import { GlobalStyles } from './Components/global';
import Hero from './Components/hero';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const updateTheme = () => {
    setDarkMode(previous=>!previous)
  }

  return (
    <>

      <GlobalStyles />
      <HeaderCom theme={darkMode} changeTheme={updateTheme} />
      {/* <Hero /> */}

    </>
  );
}

export default App;
