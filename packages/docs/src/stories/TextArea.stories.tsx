import { TextArea, TextAreaProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"

export default {
    title: "Form/TextArea",
    component: TextArea
} as Meta<TextAreaProps>


export const Text: StoryObj<TextAreaProps> = {
    args:{
     
        label: 'Titulo',
        placeholder: 'Prencha aqui...'
    }
}

export const WithError: StoryObj<TextAreaProps> = {
    args:{
     
        label: 'Titulo',
        errorMessage:'Error',
        placeholder: 'Prencha aqui...'
    }
}
