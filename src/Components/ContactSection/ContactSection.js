import styled from 'styled-components';




function ContactSection() {
    return ( 
    
    <ContactContainer>

Designed & built by Noel using React.js
    </ContactContainer> 
    
    
    );
}

export default ContactSection;



const ContactContainer = styled.div`
    display: flex;
    height: 90vh;
    width: 100vw;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 18px;
    /* align-items: ; */
    border: 1px solid ${(props) => props.theme.fontColor};
`