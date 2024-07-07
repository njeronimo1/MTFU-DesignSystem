import { ContainerTextArea, TextAreaStyle } from "./styled";



export type TextAreaProps = {
    onChange: (e:any) => void,
    placeholder: string,
    label: string,
    errorMessage: string,
    value: string
}


export function TextArea({ onChange, value, errorMessage, label, placeholder }: TextAreaProps){
    return  (
        <ContainerTextArea>
            {label !== '' && (
                <span>{label}</span>
            )}

                <TextAreaStyle 
                value={value}
                onChange={(e) => {onChange(e)}}
                placeholder={placeholder}
                ></TextAreaStyle>

            {errorMessage && (
                <label className="error_message">{errorMessage}</label>
            )}
        </ContainerTextArea>
        
    )
}