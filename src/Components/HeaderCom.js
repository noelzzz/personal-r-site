import DayNightIcon from './DayNightIcon';

function HeaderCom(props) {

    if(!props.theme){
        return(
            <header className='lightHeader'>
                <div className='headerItem'>Noel Alfaro</div>
                <div className='headerItem'>Projects</div>
                <div className='headerItem'>About</div>
                <div className='headerItem'>Contact</div>
                <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>  
                {/* <styledIcon className='name' theme={props.theme} changeTheme={props.changeTheme}/>         */}
                
            </header>
        )
    }
    if(props.theme){
        return(
            <header className='darkHeader'>
                <div className='headerItem'>Noel Alfaro</div>
                <div className='headerItem'>Projects</div>
                <div className='headerItem'>About</div>
                <div className='headerItem'>Contact</div>
                <DayNightIcon theme={props.theme} changeTheme={props.changeTheme}/>
                {/* <styledIcon className='name' theme={props.theme} changeTheme={props.changeTheme}/>   */}

            </header>
        )
    }

}

export default HeaderCom;




