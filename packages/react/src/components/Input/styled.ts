import { colors, fontSizes, fontWeights } from "@mtfu/tokens";
import styled from "styled-components";

type InputStyle = {
    variant: "search" | "text" 
}


export const ContainerInput = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    font-family: 'Inter';

    span{
        font-size: 1rem; 
        font-weight: 600;
    }

    .input_search{
        display: flex;
        background-color: white;
        padding: 0.15rem 0.5rem;
        border-radius: 18px;

        input{
            width: 100%;
        }
    }

    label{
        color: #d91636;
        font-weight: 600;
        padding: 0.15rem 1rem;
        background-color: #ff8a9d;
    }
`

export const InputStyle = styled.input<InputStyle>`
    padding: ${(props) => props.variant == "search" ? `0.5rem 0.75rem` : `0.75rem` };
    display: flex;
    font-weight: ${fontWeights.regular};
   
    border-radius: ${(props) => props.variant == "search" ? `18px` : `8px` };
    font-size: ${fontSizes["sm"]};
    background-color: ${(props) => props.variant == "search" ? `transparent` : `${colors.gray800}` } ;
    color: ${(props) => props.variant == "search" ? `${colors.gray800}` : `${colors.white}` };
    border: ${(props) => props.variant == "search" ? `` :  `1px solid ${colors.mtfu}` };

    font-family: 'Inter';
    transition: opacity;

    &:focus{
        outline: none
    }
`;