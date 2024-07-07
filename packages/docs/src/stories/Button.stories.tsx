import { Button, ButtonProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: "Form/Button",
    component: Button
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args:{
        children: "Primary",
        variant: 'normal'
    }
}

export const Link: StoryObj<ButtonProps> = {
    args:{
        children: "Criar novo projeto",
        variant: 'link'
    }
}

export const FilterActive: StoryObj<ButtonProps> = {
    args:{
        children: "Filtro ativo",
        variant: 'filter-active'
    }
}

export const FilterDesactive: StoryObj<ButtonProps> = {
    args:{
        children: "Filtro desativado",
        variant: 'filter-desactive'
    }
}

