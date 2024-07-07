import { Dropdown, DropdownProps } from '@mtfu/react'
import type { StoryObj, Meta } from "@storybook/react"
import search from "../assets/search.svg"
import { useState } from 'react'

export default {
    title: "Form/Dropdown",
    component: Dropdown
} as Meta<DropdownProps>

export const Default: StoryObj<DropdownProps> = {

    args:{
       list: [{
        label: 'Teste',
        value: "1"
       },{
        label: 'Teste2',
        value: "2"
       },{
        label: 'Teste3',
        value: "3"
       }],
       onChange: (e) => {console.log(e)},
       defaultValue: {label: "Teste", value: ""},
    }
}


