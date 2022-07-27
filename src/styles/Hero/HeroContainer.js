import styled from 'styled-components';


export const HeroContainer = styled.div`
    border: 1px solid ${(props) => props.theme.fontColor}; 
    width: 800px;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;



    @media screen and (max-width: 760px) {
        flex-direction: column;
        width: 400px;
    }

`


