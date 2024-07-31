import { colors, fontSizes, fontWeights } from "@mtfu/tokens";
import styled from "styled-components";


export const ContainerTextArea = styled.div`

    box-sizing: border-box;
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    font-family: 'Inter';

    span{
        font-size: 1rem; 
        font-weight: 600;
    }

    label{
        color: #d91636;
        font-weight: 600;
        padding: 0.15rem 1rem;
        background-color: #ff8a9d;
    }

`

export const TextAreaStyle = styled.textarea`
    min-height: 180;
    max-height: 400;
    max-width: 100%;
    padding: 0.75rem;
    display: flex;
    font-weight: ${fontWeights.regular};
   
    border-radius: 8px;
    font-size: ${fontSizes["sm"]};
    
    background-color: transparent;
    color: ${colors.white} ;
    border: 1px solid ${colors.mtfu};

    font-family: 'Inter';
    transition: opacity;
    /* color: black; */

    &:focus{
        outline: 1px solid ${colors.mtfu};
    }
`