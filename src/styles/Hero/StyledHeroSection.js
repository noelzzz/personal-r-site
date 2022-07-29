import styled from "styled-components"
import { device } from "../breakpoints"

export const StyledHeroSection = styled.div`
    /* margin-top: 10vh; */
    align-items: center;
    /* vertical-align: middle; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* padding: 25px; */
    height: 100vh;
    width: 100vw;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    border-radius: 4px;
    padding: 20px;
    /* position: rel; */


    @media ${device.tablet}{
        flex-direction: column;
    }

`