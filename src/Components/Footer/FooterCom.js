import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

import React from 'react'

export default function FooterCom() {
  return (
    <FooterContainer>
        <LeftNav>
            Designed & built by Noel using React.js
        </LeftNav>
        <RightNav>
            2022
        </RightNav>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
    height: 6vh;
    width: 100vw;
    /* border-bottom: .1px groove ${(props) => props.theme.fontColor};/ */
    /* border-top: .1px groove ${(props) => props.theme.fontColor}; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;

    @media ${device.tablet} {
        flex-direction: column;
    }
`

const LeftNav = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 20px;
    /* border: .1px solid ${(props) => props.theme.fontColor}; */
    font-size: 18px;
    /* font-weight: 600; */
`

const RightNav = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    /* border: .1px solid ${(props) => props.theme.fontColor}; */
    font-size: 22px;
    /* font-weight: 600; */
`