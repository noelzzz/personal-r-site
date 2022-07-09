import styled from 'styled-components';

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
    height: 10vh;
    width: 100vw;
    /* border-bottom: .1px groove ${(props) => props.theme.fontColor};/ */
    /* border-top: .1px groove ${(props) => props.theme.fontColor}; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LeftNav = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 40px;
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
    /* border: .1px solid ${(props) => props.theme.fontColor}; */
    font-size: 18px;
    font-weight: 600;
`

const RightNav = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 40px;
    display: flex;
    justify-content: flex-end;
    /* border: .1px solid ${(props) => props.theme.fontColor}; */
    font-size: 22px;
    font-weight: 600;
`