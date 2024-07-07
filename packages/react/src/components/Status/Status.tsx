import { StatusStyle } from "./styled"


export type StatusProps = {
   color: 'purple' | 'yellow' | 'red' | 'green',
}


export function Status({ color }: StatusProps){
    return  (
        <StatusStyle
            color={color}
        >
        </StatusStyle>
    )
}