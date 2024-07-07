import { BoxCount, BoxCountProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import raio from "../assets/raio.svg"

export default {
    title: "Form/BoxCount",
    component: BoxCount
} as Meta<BoxCountProps>

export const Default: StoryObj<BoxCountProps> = {
    args:{
        alt:'Sprint',
        count: '5',
        image: raio,
        title:'Sprints ativas'
    }
}


