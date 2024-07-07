import styled from "styled-components";

export const StatusStyle = styled.div`
    height:0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover{
        opacity: 0.9;
    }
`