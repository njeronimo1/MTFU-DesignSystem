import { Button, ButtonProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import { ComponentProps } from 'react'

export default {
    title: "Form/Button",
    component: Button
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args:{
        children: <span>Primary</span>,
        variant: 'normal',
        textAlign: 'center',
        radius: "4",
    },
}

export const Link: StoryObj<ButtonProps> = {
    args:{
        children: <span>Link</span>,
        variant: 'link',
        textAlign: 'center',
        radius: "4"
    }
}

export const FilterActive: StoryObj<ButtonProps> = {
    args:{
        children: <span>Filtro ativo</span>,
        variant: 'filter-active',
        textAlign: 'center',
        radius: "4"
    }
}

export const FilterDesactive: StoryObj<ButtonProps> = {
    args:{
        children: <span>Filtro desativo</span>,
        variant: 'filter-desactive',
        textAlign: 'center',
        radius: "4"
    }
}

export const DisabledPrimary: StoryObj<ButtonProps> = {
    args:{
        children: <span>disabled</span>,
        variant: 'normal',
        textAlign: 'center',
        radius: "4",
        disabled: true
    },
}
