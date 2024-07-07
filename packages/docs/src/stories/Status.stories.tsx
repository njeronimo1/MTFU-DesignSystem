import { Status, StatusProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"

export default {
    title: "Form/Status",
    component: Status
} as Meta<StatusProps>

export const Red: StoryObj<StatusProps> = {
    args:{
        color: "red",
    }
}
export const Yellow: StoryObj<StatusProps> = {
    args:{
        color: "yellow",
    }
}
export const Green: StoryObj<StatusProps> = {
    args:{
        color: "green",
    }
}
export const Purple: StoryObj<StatusProps> = {
    args:{
        color: "purple",
    }
}

