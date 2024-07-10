import styled from "styled-components";
import { fontSizes, fontWeights, colors } from '@mtfu/tokens';

export type ButtonProps = {
    children: string,
    textAlign: string,
    radius: string,
    variant: "normal" | "link" | "filter-active" | "filter-desactive" 
}

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

    transition: opacity;
    text-align: ${(props) => props.textAlign};

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 1
    }
    
`;

export function Button({ children, variant, textAlign, radius }: ButtonProps){
     
    if(variant == "link"){
        return (
            <ButtonStyle variant={variant} textAlign={textAlign} radius={radius}>
                {children}
            </ButtonStyle>
        )
    }

    return  (
        <ButtonStyle variant={variant} textAlign={textAlign} radius={radius}>
            {children}
        </ButtonStyle>
    )
}