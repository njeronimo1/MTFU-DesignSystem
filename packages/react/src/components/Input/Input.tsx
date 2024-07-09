import { useState } from "react";
import { ContainerInput, InputStyle } from "./styled";



export type InputProps = {
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
    }
}


export function Input({ variant, onChange, errorMessage, label, optional, placeholder, imgSearch, imagesPassword, type }: InputProps){

    const [eyeOpen, setEyeOpen] = useState(false);

    return  (
        <ContainerInput>
            {label !== '' && (
                <span>{label}</span>
            )}

            {variant == "search" && (
                <div className="input_search">
                    <img src={imgSearch} alt="search"/>
                    <InputStyle 
                    type={type}
                    variant={variant} 
                    onChange={(e) => {onChange(e)}}
                    placeholder={placeholder}
                    ></InputStyle>
                </div>
            )}           

            {variant == "text" && (
                <InputStyle 
                type={type}
                variant={variant} 
                onChange={(e) => {onChange(e)}}
                placeholder={placeholder}
                ></InputStyle>
            )} 

            {variant == "password" && (
                <div className="input_password">
                    <InputStyle 
                    variant={variant} 
                    type={!eyeOpen ? "password" : "text"}
                    onChange={(e) => {onChange(e)}}
                    placeholder={placeholder}

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
}