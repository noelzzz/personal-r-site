// import styledHeaderCom from '../styles/styledHeaderCom';
import StyledHeaderCom from '../../styles/Header/StyledHeaderCom';
import DayNightIcon from './DayNightIcon';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../themes';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function HeaderCom(props) {
    

    return(
    <>  
    <Fade cascade>
            <StyledHeaderCom theme={props.theme}>

            
                <ItemContainer>
                    

                {/* <Router>
                    <Routes>
                        <Route path="/" exact component={HeroSection}>

                        </Route> */}
                        {/* <Route exact path={["/#Hero", "/#Projects", "/#About", "/#Contact"]}>

                        </Route> */}
                    {/* </Routes>
                </Router> */}
                
                    <NavItem>
                        Noel Alfaro
                    </NavItem>
                    
              
                    <NavItem>
                        Projects
                    </NavItem>

                    <NavItem>
                        About    
                    </NavItem>

                    <NavItem>
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

const NavItem = styled.div`
    /* word-wrap: nowrap; */
    /* word-break: keep-all; */
    width: fit-content;
    cursor: pointer;
    margin: 2%;
    /* font-size: 18px; */


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