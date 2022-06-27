import styled from "styled-components";

// import HeaderCom from "../Components/HeaderCom";

const StyledHeaderCom = styled.div`
    height: 10vh;
    width: 100%;
    /* background-color: ${(props) => props.theme.header};
    color: ${(props) => props.theme.fontColor}; */
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border: none;
    box-sizing: border-box;
    padding: none;
    margin-top:none;
    font-weight: 700;
    position: fixed;
    background-color: ${(props) => props.theme.backgroundColor};
    /* opacity: 80%; */
    z-index: 10;
`;



export default StyledHeaderCom;