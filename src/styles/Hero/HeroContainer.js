import styled from 'styled-components';
import { device } from '../breakpoints';


export const HeroContainer = styled.div`
    border: 1px solid ${(props) => props.theme.fontColor}; 
    /* width: 800px; */
    /* width: 60%; */
    height: 80%;
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: space-evenly;
    /* justify-content: ; */
    /* background-color: red; */



    @media  ${device.laptop}{
        flex-direction: column;
        width: 300px;
    }

`


