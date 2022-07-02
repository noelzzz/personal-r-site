// import styledHeaderCom from '../styles/styledHeaderCom';
import StyledHeaderCom from '../../styles/Header/StyledHeaderCom';
import DayNightIcon from './DayNightIcon';
import { Fade } from 'react-reveal';
import styled from 'styled-components';


function HeaderCom(props) {
    return(
    <>
            <StyledHeaderCom theme={props.theme}>


                <ItemContainer>
                
                    <NavItem>
                        <Fade cascade>
                            Noel Alfaro
                        </Fade>
                    </NavItem>

                    <NavItem>
                        <Fade>
                            Projects
                        </Fade>
                    </NavItem>

                    <NavItem>
                        <Fade>
                            About
                        </Fade>
                    </NavItem>

                    <NavItem>
                        <Fade>
                            Contact
                        </Fade>
                    </NavItem>
                
                </ItemContainer>
                

                <IconContainer>

                    <IconNavItem>

                        <Fade>
                            <DayNightIcon mode={props.mode} changeMode={props.changeMode}/>
                        </Fade>

                    </IconNavItem>

                </IconContainer>

            
            </StyledHeaderCom>
        
        
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
    word-wrap: nowrap;
    word-break: keep-all;
    width: fit-content;
    cursor: pointer;
    margin: 2%;
    /* font-size: 18px; */

`

const IconNavItem = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 2%;
`