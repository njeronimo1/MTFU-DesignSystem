import { Button, ButtonProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import { ComponentProps } from 'react'

export default {
    title: "Form/Button",
    component: Button
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args:{
        children: "Primary",
        variant: 'normal',
        textAlign: 'center',
        radius: "4",
    },
}

export const Link: StoryObj<ButtonProps> = {
    args:{
        children: "Criar novo projeto",
        variant: 'link',
        textAlign: 'center',
        radius: "4"
    }
}

export const FilterActive: StoryObj<ButtonProps> = {
    args:{
        children: "Filtro ativo",
        variant: 'filter-active',
        textAlign: 'center',
        radius: "4"
    }
}

export const FilterDesactive: StoryObj<ButtonProps> = {
    args:{
        children: "Filtro desativado",
        variant: 'filter-desactive',
        textAlign: 'center',
        radius: "4"
    }
}

export const DisabledPrimary: StoryObj<ButtonProps> = {
    args:{
        children: "Primary",
        variant: 'normal',
        textAlign: 'center',
        radius: "4",
        state: "disabled",
        disabled: true
    },
}
