// import styledHeaderCom from '../styles/styledHeaderCom';
import StyledHeaderCom from '../../styles/Header/StyledHeaderCom';
import DayNightIcon from './DayNightIcon';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
// import { lightTheme, darkTheme } from '../../themes';
// import {Link } from "react-router-dom";
// import Scrollspy from "react-scrollspy-highlight"




function HeaderCom(props) {



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
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
`

const NavItem = styled.li`
    list-style-type: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 1%;
    width: fit-content;
    height: fit-content;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    cursor: pointer;
    margin: 1%;
    transition: all .1s linear;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid transparent;



    &:hover{
        scale: 101%;
        box-sizing: border-box;
        border: 1px solid ${(props) => props.theme.fontColor};
        box-shadow: 
              1px 1px ${(props) => props.theme.fontColor},
              2px 2px ${(props) => props.theme.fontColor},
              3px 3px ${(props) => props.theme.fontColor};
        
        
    }

`

const IconNavItem = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 2%;
`