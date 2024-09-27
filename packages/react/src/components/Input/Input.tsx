import { ElementRef, forwardRef, useState, ComponentProps } from 'react'
import { ContainerInput, InputStyle } from './styled'

export interface InputProps extends ComponentProps<typeof InputStyle> {
  placeholder: string
  label: string
  errorMessage: string
  optional: boolean
  variant: 'search' | 'text' | 'password'
  imgSearch?: string

  imagesPassword?: {
    eyeClosed: string
    eyeOpen: string
  }
  onClickSearch?: () => void
}

export const Input = forwardRef<ElementRef<typeof InputStyle>, InputProps>(
  (
    {
      label,
      variant,
      imgSearch,
      type,
      placeholder,
      imagesPassword,
      errorMessage,
      onClickSearch,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [eyeOpen, setEyeOpen] = useState(false)

    return (
      <ContainerInput>
        {label !== '' && <span>{label}</span>}

        {variant == 'search' && (
          <div className="input_search">
            <div className="img_search" onClick={onClickSearch}>
              <img src={imgSearch} alt="search" />
            </div>
            <InputStyle
              type={type}
              disabled={props.disabled}
              id={props.id}
              name={props.name}
              variant={variant}
              placeholder={placeholder}
              style={props.style}
              {...props}
            ></InputStyle>
          </div>
        )}

        {variant == 'text' && (
          <InputStyle
            type={type}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            variant={variant}
            placeholder={placeholder}
            style={props.style}
            {...props}
          ></InputStyle>
        )}

        {variant == 'password' && (
          <div className="input_password">
            <InputStyle
              type={eyeOpen ? 'text' : 'password'}
              disabled={props.disabled}
              id={props.id}
              name={props.name}
              variant={variant}
              placeholder={placeholder}
              style={props.style}
              {...props}
            ></InputStyle>

            {eyeOpen && (
              <img
                src={imagesPassword?.eyeOpen}
                alt="Olho aberto"
                onClick={() => {
                  setEyeOpen(false)
                }}
              />
            )}

            {!eyeOpen && (
              <img
                src={imagesPassword?.eyeClosed}
                alt="Olho fechado"
                onClick={() => {
                  setEyeOpen(true)
                }}
              />
            )}
          </div>
        )}

        {errorMessage && (
          <label className="error_message">{errorMessage}</label>
        )}
      </ContainerInput>
    )
  },
)
