// import { DropdownStyle } from "./styled";
import React, { useEffect, useState } from "react";
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";
import { SelectContainer, SelectContent, SelectItem, SelectTrigger } from "./styled";

type dropdownDefault = {
    label: string,
    value: string
}

export type DropdownProps = {
    defaultValue: dropdownDefault,
    onChange: (value: string) => void,
    list: dropdownDefault[]
}


export function Dropdown({ list, onChange, defaultValue }: DropdownProps){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        onChange(value);
    }, [value]);

    return  (
        <SelectContainer 
            aria-label="Language" 
            value={value}
            onValueChange={(e) => {setValue(e)}}
            open={open}
            onOpenChange={setOpen}
        >
            <SelectTrigger>
                <Select.Value placeholder="Select a language" />
                <Select.Icon className="SelectIcon">
                    <ChevronDownIcon />
                </Select.Icon>
            </SelectTrigger>

           
                <SelectContent 
                    role="dialog"
                    aria-label="Languages"
                    position="popper"
                    className="popover"
                    alignOffset={-16}
                    
                >
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    {list.map((item) => {
                        return(
                            <>
                                <SelectItem value={item.value}>
                                    <Select.ItemText>{item.label}</Select.ItemText>
                                    <Select.ItemIndicator className="item-indicator">
                                        <CheckIcon />
                                    </Select.ItemIndicator>
                                </SelectItem>
                            </>
                        )
                    })}
                    
                    
                </SelectContent>
            
        </SelectContainer>
    )
}

