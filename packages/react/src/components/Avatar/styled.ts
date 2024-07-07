import styled from "styled-components";
import * as Avatar from '@radix-ui/react-avatar' 
import { colors } from "@mtfu/tokens";

export const AvatarContainer = styled(Avatar.Root)`
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    overflow: hidden;

`

export const AvatarImage = styled(Avatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 'inherit';
`;

export const AvatarFallback = styled(Avatar.Fallback)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gray200};
    color: ${colors.gray700};

    svg{
        width: 1.25rem;
        height: 1.25rem;
    }
`