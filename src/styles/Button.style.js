import styled from 'styled-components'
import Button from '../Components/Button';

export const StyledButton = styled(Button)`
    width: 100px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    justify-content: center;


    &:hover{
        & label {
            color: green;
        }
    }
`;

export const ButtonLabel = styled.label`

    font-size: 25px;
    color: white;
`




