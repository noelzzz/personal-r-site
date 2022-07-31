import styled from "styled-components";
import { device } from "../breakpoints";

// import HeaderCom from "../Components/HeaderCom";

const StyledHeaderCom = styled.div`
    height: 80px;
    min-height: 70px;
    width: 100vw;
    max-width: 2560px;
    display: flex;
    flex-direction: row;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    align-items: center;
    font-weight: 700;
    font-size: 32px;
    position: fixed;
    background-color: ${(props) => props.theme.backgroundColor};
    border-bottom: .1px groove ${(props) => props.theme.fontColor};
    z-index: 10;


    @media  ${device.laptopL}{
        /* font-size: 16px; */
        /* flex-wrap: wrap; */
        /* color:red; */
        /* border: 1px solid ${(props) => props.theme.fontColor}; */
        

        
    }

`;



export default StyledHeaderCom;