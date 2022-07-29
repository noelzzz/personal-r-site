import styled from 'styled-components';
import { device } from '../breakpoints';


export const HeroContainer = styled.div`
    /* border: 1px solid ${(props) => props.theme.fontColor};  */
    width: 800px;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;



    @media  ${device.tablet}{
        flex-direction: column;
        width: 300px;
    }

`


