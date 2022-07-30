import styled from "styled-components"
import { device } from "../breakpoints"

export const StyledHeroSection = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
    border: 1px solid ${(props) => props.theme.fontColor};
    border-radius: 4px;
    padding: 20px;


    @media ${device.laptop}{
        flex-direction: column;
    }


    @media ${device.tablet} {
        height: 100vh;
    }

`