import { ComponentProps } from 'react'
import { ContainerTextArea, TextAreaStyle } from './styled'

export interface TextAreaProps extends ComponentProps<typeof TextAreaStyle> {
  onChange: (e: any) => void
  placeholder: string
  label: string
  errorMessage: string
  value: string
}

export function TextArea({
  onChange,
  value,
  errorMessage,
  label,
  placeholder,
  ...props
}: TextAreaProps) {
  return (
    <ContainerTextArea>
      {label !== '' && <span>{label}</span>}

      <TextAreaStyle
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={placeholder}
        {...props}
      ></TextAreaStyle>

      {errorMessage && <label className="error_message">{errorMessage}</label>}
    </ContainerTextArea>
  )
}
