import { ElementRef, forwardRef, useState } from "react";
import { ContainerInput, InputStyle } from "./styled";
import { ComponentProps } from "react";


export interface InputProps extends ComponentProps<typeof InputStyle>{
    onChange: (e:any) => void,
    placeholder: string,
    label: string,
    type: string,
    errorMessage: string,
    optional: boolean,
    variant: "search" | "text" | "password",
    imgSearch: string;
    imagesPassword?: {
        eyeClosed: string,
        eyeOpen: string
    };
}

export const Input = forwardRef<ElementRef<typeof InputStyle>, InputProps>(({label, variant, imgSearch, type, placeholder, onChange, imagesPassword, errorMessage, ...props} : InputProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);
    
    return(
        <ContainerInput>
            {label !== '' && (
                <span>{label}</span>
            )}

            {variant == "search" && (
                <div className="input_search">
                    <div className="img_search">
                        <img src={imgSearch} alt="search"/>
                    </div>
                    <InputStyle 
                        type={type}
                        disabled={props.disabled}
                        id={props.id}
                        name={props.name}
                        variant={variant} 
                        onChange={(e) => {onChange(e)}}
                        placeholder={placeholder}
                        style={props.style}
                        {...props}
                    ></InputStyle>
                </div>
            )}           

            {variant == "text" && (
                <InputStyle 
                    type={type}
                        disabled={props.disabled}
                        id={props.id}
                        name={props.name}
                        variant={variant} 
                        onChange={(e) => {onChange(e)}}
                        placeholder={placeholder}
                        style={props.style}
                        {...props}
                ></InputStyle>
            )} 

            {variant == "password" && (
                <div className="input_password">
                    <InputStyle 
                        type={type}
                        disabled={props.disabled}
                        id={props.id}
                        name={props.name}
                        variant={variant} 
                        onChange={(e) => {onChange(e)}}
                        placeholder={placeholder}
                        style={props.style}
                        {...props}

                    ></InputStyle>

                    {eyeOpen && (
                        <img src={imagesPassword?.eyeOpen} alt="search" onClick={() => {setEyeOpen(false)}}/>
                    )}

                    {!eyeOpen && (
                        <img src={imagesPassword?.eyeClosed} alt="search" onClick={() => {setEyeOpen(true)}}/>
                    )}
                    
                </div>
            )} 

            {errorMessage && (
                <label className="error_message">{errorMessage}</label>
            )}
            

            
        </ContainerInput>
    )
})

// forwardRef<ElementRef<typeof Input>, TextInputProps>
// export function Input({ variant, onChange, errorMessage, label, optional, placeholder, imgSearch, imagesPassword, type, ...props }: ){

    

//     return  (
        
        
//     )
// }