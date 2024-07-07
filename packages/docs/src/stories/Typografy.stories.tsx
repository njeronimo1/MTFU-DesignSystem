import { Typografy, TypografyProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"

export default {
    title: "Form/Typografy",
    component: Typografy
} as Meta<TypografyProps>

export const Title: StoryObj<TypografyProps> = {
    args:{
        align: "left",
        children: "Titulo",
        color: "gray",
        fontWeight: 800,
        type: 'title'
    }
}

export const Description: StoryObj<TypografyProps> = {
    args:{
        align: "left",
        children: "Desc",
        color: "gray",
        fontWeight: 500,
        type: 'description'
    }
}

export const Footer: StoryObj<TypografyProps> = {
    args:{
        align: "left",
        children: "Footer",
        color: "gray",
        fontWeight: 400,
        type: 'footer'
    }
}

export const Medium: StoryObj<TypografyProps> = {
    args:{
        align: "left",
        children: "Medium",
        color: "gray",
        fontWeight: 400,
        type: 'medium'
    }
}

