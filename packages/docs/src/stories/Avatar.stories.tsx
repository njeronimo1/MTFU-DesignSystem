import { Avatar, AvatarProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"

export default {
    title: "Form/Avatar",
    component: Avatar
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    args:{
        src: 'https://github.com/njeronimo1.png',
        alt: 'Nicolas'
    }
}

export const WithFallback: StoryObj<AvatarProps> = {
    args:{
        src: undefined,
        alt: ''
    }
}

