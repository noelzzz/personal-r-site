import styled from "styled-components";

export const HeroImage = styled.div`
    width: fit-content;
    height: fit-content;
    /* padding: 2%; */
    line-height: 2.5;
    display: flex;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    align-items: center;
    /* margin: 5px; */
    /* color: blue; */
    background-image: url(../images/damnAlbum.jpeg);
    

    img{
        border-radius: 5px;
    }
`