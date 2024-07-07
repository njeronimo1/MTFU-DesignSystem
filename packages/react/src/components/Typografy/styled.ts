import styled from "styled-components";

export type TypografyPropsStyle = {
    align: 'left' | 'center' | 'right',
    color: string,
    fontWeight: 300 | 400 | 500 | 600 | 700 | 800 | 900,
    type: 'title' | 'description' | 'footer' | 'medium'
 }

export const TypografyStyle = styled.p<TypografyPropsStyle>`
    font-family: "Inter";
    font-size: ${(props) => props.type == "title" ? `1.25rem` : props.type == "description" ? '0.9rem' : props.type == "medium" ? '0.875rem' : '0.7rem'};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
    align: ${(props) => props.align};
`