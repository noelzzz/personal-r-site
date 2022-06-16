import styled from "styled-components";

// import HeaderCom from "../Components/HeaderCom";

const styledHeaderCom = styled.div`
    height: 10vh;
    width: 100%;
    /* background-color: ${(props) => props.theme.header};
    color: ${(props) => props.theme.fontColor}; */
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    transition: all .2s linear;
    border: none;
    box-sizing: border-box;
    padding: none;
    margin: none;
    font-weight: 700;
`;



export default styledHeaderCom;