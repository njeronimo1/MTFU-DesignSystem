// import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styled'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} alt={props.alt} />
      <AvatarFallback delayMs={600}>{props.alt}</AvatarFallback>
    </AvatarContainer>
  )
}
