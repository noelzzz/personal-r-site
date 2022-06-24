// import styledHeaderCom from '../styles/styledHeaderCom';
import StyledHeaderCom from '../../styles/Header/StyledHeaderCom';
import DayNightIcon from './DayNightIcon';
import { Fade } from 'react-reveal';


function HeaderCom(props) {
    return(
    <>
            <StyledHeaderCom theme={props.theme}>

            <Fade duration="2000">
                <div className='itemContainer'>
                    <div className='headerItem'>Noel Alfaro</div>
                    <div className='headerItem'>Projects</div>
                    <div className='headerItem'>About</div>
                    <div className='headerItem'>Contact</div>
                </div>
               

                <div className='iconContainer'>
                    <DayNightIcon mode={props.mode} changeMode={props.changeMode}/>
                </div>
                
        
            </Fade>
                
           
            
            
            </StyledHeaderCom>
        
        
        
        
    </>


    );
    // if(!props.theme){
    //     return(
    //         <header className='lightHeader'>
    //             <div className='headerItem'>Noel Alfaro</div>
    //             <div className='headerItem'>Projects</div>
    //             <div className='headerItem'>About</div>
    //             <div className='headerItem'>Contact</div>
    //             <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>  
    //             {/* <styledIcon className='name' theme={props.theme} changeTheme={props.changeTheme}/>         */}
                
    //         </header>
    //     )
    // }
    // if(props.theme){
    //     return(
    //         <header className='darkHeader'>
    //             <div className='headerItem'>Noel Alfaro</div>
    //             <div className='headerItem'>Projects</div>
    //             <div className='headerItem'>About</div>
    //             <div className='headerItem'>Contact</div>
    //             <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>
    //             {/* <styledIcon className='name' theme={props.theme} changeTheme={props.changeTheme}/>   */}

    //         </header>
    //     )
    // }
    
    

}

export default HeaderCom;




