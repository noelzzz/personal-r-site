import styled from 'styled-components';




function ContactSection() {
    return ( 
    
    <ContactContainer>
        <ContactSpace></ContactSpace>
    </ContactContainer> 
    

    );
}

/* Designed & built by Noel using React.js */
export default ContactSection;



const ContactContainer = styled.div`
    display: grid;
    height: 90vh;
    width: 100vw;
    /* justify-content: center; */
    flex-direction: row;
    place-items: center;
    /* font-size: 18px */
    /* align-items: center; */
    border: 1px solid ${(props) => props.theme.fontColor};
`


const ContactSpace = styled.div`
    width: 60%;
    height: 80%;
    border: 1px solid ${(props) => props.theme.fontColor};
`