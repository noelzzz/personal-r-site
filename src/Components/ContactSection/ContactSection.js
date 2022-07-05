import styled from 'styled-components';




function ContactSection() {
    return ( 
    
    <ContactContainer>


    </ContactContainer> 
    
    
    );
}

export default ContactSection;



const ContactContainer = styled.div`
    display: flex;
    height: 90vh;
    width: 100vw;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${(props) => props.theme.fontColor};
`