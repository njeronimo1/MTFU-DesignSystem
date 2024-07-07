import { Input, InputProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"

export default {
    title: "Form/Input",
    component: Input
} as Meta<InputProps>

export const Search: StoryObj<InputProps> = {
    args:{
        variant: 'search',
        optional: false,
        placeholder: 'Prencha aqui...',
        imgSearch: search
    }
}

export const Text: StoryObj<InputProps> = {
    args:{
        variant: 'text',
        label: 'Titulo',
        optional: true,
        placeholder: 'Prencha aqui...'
    }
}

export const WithError: StoryObj<InputProps> = {
    args:{
        variant: 'text',
        label: 'Titulo',
        optional: true,
        placeholder: 'Prencha aqui...',
        errorMessage: 'Error'
    }
}

