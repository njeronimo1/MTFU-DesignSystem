import { TypografyStyle } from "./styled";



export type TypografyProps = {
   align: 'left' | 'center' | 'right',
   color: string,
   fontWeight: 300 | 400 | 500 | 600 | 700 | 800 | 900,
   children: string,
   type: 'title' | 'description' | 'footer' | 'medium'
}


export function Typografy({ children, align, color, fontWeight, type }: TypografyProps){
    return  (
        <TypografyStyle
            align={align}
            color={color}
            fontWeight={fontWeight}
            type={type}
        >
            {children}
        </TypografyStyle>
    )
}