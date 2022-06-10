import DayNightIcon from './DayNightIcon';
import styledIcon from './styledIcon.js'



function HeaderCom(props) {

    if(!props.theme){
        return(
            <header className='lightHeader'>
                <div className='name'>Noel Alfaro</div>
                <div className='siteTitle'>Personal Site</div>
                <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>  
                <styledIcon theme={props.theme} changeTheme={props.changeTheme}/>              
                
            </header>
        )
    }
    if(props.theme){
        return(
            <header className='darkHeader'>
                <div className='name'>Noel Alfaro</div>
                <div className='siteTitle'>Personal Site</div>
                <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>
            </header>
        )
    }

}

export default HeaderCom;