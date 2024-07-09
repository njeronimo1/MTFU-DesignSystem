import { Input, InputProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"
import eyeClosed from "../assets/eye-closed.svg"
import eyeOpen from "../assets/eye-open.svg"

export default {
    title: "Form/Input",
    component: Input
} as Meta<InputProps>

export const Search: StoryObj<InputProps> = {
    args:{
        variant: 'search',
        optional: false,
        type: 'text',
        placeholder: 'Prencha aqui...',
        imgSearch: search
    }
}

export const Text: StoryObj<InputProps> = {
    args:{
        variant: 'text',
        type: 'text',
        label: 'Titulo',
        optional: true,
        placeholder: 'Prencha aqui...'
    }
}

export const WithError: StoryObj<InputProps> = {
    args:{
        variant: 'text',
        label: 'Titulo',
        type: 'text',
        optional: true,
        placeholder: 'Prencha aqui...',
        errorMessage: 'Error'
    }
}

export const Password: StoryObj<InputProps> = {
    args:{
        variant: 'password',
        type: 'password',
        label: 'Titulo',
        optional: true,
        placeholder: 'Prencha aqui...',
        errorMessage: 'Error',
        imagesPassword: {
            eyeClosed: eyeClosed,
            eyeOpen: eyeOpen
        }
    }
}

