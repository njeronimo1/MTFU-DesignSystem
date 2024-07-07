import { ContainerInput, InputStyle } from "./styled";



export type InputProps = {
    onChange: (e:any) => void,
    placeholder: string,
    label: string,
    errorMessage: string,
    optional: boolean,
    variant: "search" | "text",
    imgSearch: string;
    
}


export function Input({ variant, onChange, errorMessage, label, optional, placeholder, imgSearch }: InputProps){
    return  (
        <ContainerInput>
            {label !== '' && (
                <span>{label}</span>
            )}

            {variant == "search" && (
                <div className="input_search">
                    <img src={imgSearch} alt="search"/>
                    <InputStyle 
                    variant={variant} 
                    onChange={(e) => {onChange(e)}}
                    placeholder={placeholder}
                    ></InputStyle>
                </div>
            )}           

            {variant == "text" && (
                <InputStyle 
                variant={variant} 
                onChange={(e) => {onChange(e)}}
                placeholder={placeholder}
                ></InputStyle>
            )} 

            {errorMessage && (
                <label className="error_message">{errorMessage}</label>
            )}
            

            
        </ContainerInput>
        
    )
}