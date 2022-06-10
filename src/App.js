import './App.css';
import Zoom from 'react-reveal/Zoom';
import HeaderCom from './HeaderCom';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './Components/global';
import { StyledButton } from './Components/Button.style';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const updateTheme = () => {
    setDarkMode(previous=>!previous)
  }

  return (
    <>
    
    <Zoom>


      <HeaderCom theme={darkMode} changeTheme={updateTheme} />
      {/* <StyledButton buttonLabel="Click Here" backgroundColor="violet" onClick={toggleTheme}></StyledButton> */}

    </Zoom>
    
    </>
  );
}

export default App;
