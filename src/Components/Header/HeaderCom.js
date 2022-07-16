// import styledHeaderCom from '../styles/styledHeaderCom';
import StyledHeaderCom from '../../styles/Header/StyledHeaderCom';
import DayNightIcon from './DayNightIcon';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../themes';
// import {Link } from "react-router-dom";
// import Scrollspy from "react-scrollspy-highlight"




function HeaderCom(props) {

    const changeNavActive = () => {
        if(props.sectionActive === 'noel'){
            console.log("noel section")
        }
    }


    return(
    <>  
    <Fade cascade>
            <StyledHeaderCom theme={props.theme}>

            
                <ItemContainer>
                    
                    
                    <NavItem onClick={props.onNoelClick} >
                        
                        Noel Alfaro
                        
                    </NavItem>
                
              
                    <NavItem onClick={props.onProjectsClick}>
                        Projects
                    </NavItem>

                    <NavItem onClick={props.onAboutClick}>
                        About    
                    </NavItem>

                    <NavItem onClick={props.onContactClick}>
                         Contact   
                    </NavItem>

                
                
                </ItemContainer>
                

                <IconContainer>

                    <IconNavItem>

                        
                            <DayNightIcon mode={props.mode} changeMode={props.changeMode}/>
                        

                    </IconNavItem>

                </IconContainer>

            
            </StyledHeaderCom>
        </Fade>
        
    </>


    );
}

export default HeaderCom;




const ItemContainer = styled.div`
    width: 35%;
    height: 90%;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 700;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */


`
const IconContainer = styled.div`
    width: 65%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const NavItem = styled.li`
    list-style-type: none;
    white-space: nowrap;
    width: fit-content;
    cursor: pointer;
    margin: 2%;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    /* font-size: 18px; */
    text-decoration: none;
    background-image: linear-gradient(to right, #000, #000);
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .5s ease;

    &:hover{
        /* -webkit-text-decoration: slateblue solid underline;
        text-decoration: slateblue solid underline;
        -webkit-text-underline-position: under;
        text-underline-position: under; */
        background-size: 100% 2px;

        
}
    
    /* &:active{
        background-color: ${ (props) => props.theme =  lightTheme ?  darkTheme.backgroundColor : lightTheme.backgroundColor};
        color: ${ (props) => props.theme =  lightTheme ?  darkTheme.fontColor : lightTheme.fontColor};
    } */

`

const IconNavItem = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 2%;
`