import React, { useState } from 'react';


function HeaderCom() {
    const [DarkMode, setDarkMode] = useState(false)




    function toggleDarkMode(){
        if(DarkMode){
            setDarkMode(false)
        }
        else{
            setDarkMode(true)
        }
        
    }

    if(!DarkMode){
        return(
            <header className='lightHeader'>
                <div className='name'>Noel Alfaro</div>
                <div className='siteTitle'>Personal Site</div>
                <button className='themeButton' onClick={toggleDarkMode}>Change Theme</button>
                
                {/* <animated.svg
                    className='themeButton'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke-linejoin="round"
                    onClick={toggleDarkMode}
                >
                    <mask id="mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />    
                        <animated.circle cx="12" cy="4" r="9" fill="black" />  
                    </mask>
                    <g stroke='currentColor'>
                    <circle fill="black"  cx="12" cy="12" r="9" mask='url(#mask)' />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </animated.svg> */}

                
            </header>
        )
    }
    if(DarkMode){
        return(
            <header className='darkHeader'>
                <div className='name'>Noel Alfaro</div>
                <div className='siteTitle'>Personal Site</div>
                <button className='themeButton' onClick={toggleDarkMode}>Change Theme</button>
            </header>
        )
    }
        
        


}

export default HeaderCom;