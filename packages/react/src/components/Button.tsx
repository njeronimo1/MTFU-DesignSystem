import styled from "styled-components";
import { ComponentProps, ElementType } from "react";
import { fontSizes, fontWeights, colors } from '@mtfu/tokens';


export const ButtonStyle = styled.button<ButtonProps>`
    padding: ${(props) => props.variant == "normal" ? "0.5rem 1rem" : props.variant == "link" ? "1rem 1.25rem"  : "0.15rem 1rem" };
    min-width: ${(props) => props.variant == "link" ? "10rem" : ""};
    border: none;
    /* width: 100%; */
    display: flex;
    align-items: center;
    font-weight: ${fontWeights.bold};
    justify-content:${(props) => props.variant == "link" ? `space-beetwen` : `center` };
    border-radius: ${(props) => `${props.radius}px`};
    font-size: ${fontSizes["md"]};
    background-color: ${(props) => props.variant == "filter-desactive" ? `${colors.gray200}` : `${colors.mtfu}` } ;
    color: ${(props) => props.variant == "filter-desactive" ? `${colors.gray800}` : `${colors.white}` };

    font-family: 'Inter';
    cursor: pointer;

    transition: ease-in-out 0.1s  filter, ease-in 0.15s background-color, ease-in 0.3s outline;
    text-align: ${(props) => props.textAlign};


    &:hover{
        /* filter: brightness(0.95); */
        background-color:#7d13fd;
        /* backdrop-filter: blur(100px); */
        
        /* outline: 0.01rem solid ${colors.mtfu}; */
        /* opacity: 0.8; */
    }

    &:active{
        outline: 0.01rem solid #7d13fd;
        filter: blur(0.5px);
        /* filter: brightness(1.15); */
    }

    &:focus{
        /* outline: 0.01rem solid #7d13fd; */
        filter: blur(0.5px);
        background-color:#410091;
        /* filter: brightness(1.15); */
    }

    &:disabled{
        outline: 0.01rem solid #a0a0a0;
        background-color: #707070;
        color: #222222;
    }
    
`;

export interface ButtonProps{
    children: string,
    textAlign: string,
    radius: string,
    variant: "normal" | "link" | "filter-active" | "filter-desactive" ,
}


export function Button({ children, variant, textAlign, radius, ...props }: ComponentProps<typeof ButtonStyle>){
     
    if(variant == "link"){
        return (
            <ButtonStyle variant={variant} textAlign={textAlign} radius={radius} {...props}>
                {children}
            </ButtonStyle>
        )
    }

    return  (
        <ButtonStyle variant={variant} textAlign={textAlign} radius={radius} {...props}>
            {children}
        </ButtonStyle>
    )
}