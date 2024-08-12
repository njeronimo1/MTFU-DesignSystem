import { colors, fontSizes, fontWeights } from "@mtfu/tokens";
import styled from "styled-components";
import { ComponentProps } from "react";

interface InputStyle {
    variant: "search" | "text" | "password",
    
}


export const ContainerInput = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    font-family: 'Inter';

    span{
        font-size: 1rem; 
        color: white;
        font-weight: 600;
    }

    .input_search{
        display: flex;
        background-color: white;
        /* box-shadow: 1px 1px 1px black; */
        padding: 0.15rem 0.5rem;
        border-radius: 18px;
        align-items: center;

        .img_search{
            display: flex;
            align-items: center;
            min-width: 1.5rem;
            /* background: red; */

            img{
                width: 100%;
            }
        }

        input{
            width: 100%;
        }
    }

    .input_password{
        display: flex;
        position: relative;

        input{
            width: 100%;
        }

        img{
            color: white;
            position: absolute;
            top: 0.875rem;
            right: 1rem;

            cursor: pointer;
            transition: 0.2 opacity;

            &:hover{
                opacity: 0.8;
            }
        }

        svg{
            color: white;
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
    background-color: ${(props) => props.variant == "search" ? `transparent` : `transparent` } ;
    color: ${(props) => props.variant == "search" ? `${colors.gray800}` : `${colors.black}` };
    border: ${(props) => props.variant == "search" ? `none` :  `1px solid ${colors.mtfu}` };

    font-family: 'Inter';
    transition: opacity;

    &:active{
        outline: ${(props) => props.variant == "search" ? `none` :  `1px solid ${colors.mtfu}` };
    }

    &:focus{
        outline: ${(props) => props.variant == "search" ? `none` :  `1px solid ${colors.mtfu}` };
    }
`;