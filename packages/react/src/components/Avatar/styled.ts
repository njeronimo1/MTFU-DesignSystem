import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'
import { colors } from '@mtfu/tokens'

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: 50%;
  display: inline-block;
  width: 2.65rem;
  height: 2.65rem;
  overflow: hidden;
  /* border: 2px solid ${colors.mtfu}; */
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.35);
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 'inherit';
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};

  color: ${colors.mtfu};
  font-weight: 600;
  font-size: 1rem;

  cursor: default;
  font-family: 'Inter';

  svg {
    width: 2rem;
    height: 2rem;
  }
`
