import styled from "styled-components";



export const HeroImage = styled.div`
    width: fit-content;
    height: fit-content;
    /* padding: 2%; */
    /* line-height: 2.5; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid ${(props) => props.theme.fontColor}; */
    /* align-items: center; */
    /* margin-left: 50px; */
    /* color: blue; */
    /* background-image: url(../images/damnAlbum.jpeg); */
    

    img{
        border-radius: 5px;
        width: 300px;
        height: 300px;
    }



    @media screen and (max-width: 760px) {
        flex-direction: column;


        img{
            width: 150px;
            height: 150px;
        }
    }
`