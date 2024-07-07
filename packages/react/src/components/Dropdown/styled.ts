import { colors, fontSizes, fontWeights } from "@mtfu/tokens";
import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

export const SelectContainer = styled(Select.Root)`
    width: 100%;
    .SelectScrollButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        background-color: white;
        color: black;
        cursor: default;
    }

    .SelectItem {
        font-size: 13px;
        line-height: 1;
        color: black;
        border-radius: 3px;
        display: flex;
        align-items: center;
        height: 25px;
        padding: 0 35px 0 25px;
        position: relative;
        user-select: none;
        }
        .SelectItem[data-disabled] {
        color: black;
        pointer-events: none;
        }
        .SelectItem[data-highlighted] {
        outline: none;
        background-color: gray;
        color: black;
        }
    
`

export const SelectTrigger = styled(Select.Trigger)`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray800};
  padding: 0.75rem;
  color: white;
  font-size: ${fontSizes["sm"]};
  font-family: 'Inter';
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
  color-scheme: light;
  border: 1px solid ${colors.mtfu};

  &:hover {
    filter: brightness(0.8);
  }

  .SelectIcon{
    position: relative;
    top: 0.10rem;
  }
`

export const SelectContent = styled(Select.Content)`
    width: var(--radix-select-content-available-width);
    z-index: 50;
    
    border-radius: 0.5rem;
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.25),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    color-scheme: light;
`

export const SelectItem = styled(Select.Item)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    height: 2.5rem;
    cursor: default;
    scroll-margin-top: 0.25rem;
    scroll-margin-bottom: 0.25rem;
    align-items: center;
    font-size: ${fontSizes["sm"]};
    font-family: 'Inter';
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    color: white;
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: ${colors.gray700};

    &[data-highlighted] {
      /* width: 100%; */
      background-color: ${colors.gray800};
      outline: none;
      color: white;
    }

    &:first-child{
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    &:last-child{
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    svg{
      position: relative;
      top: 0.1rem;
      left: 0.1rem;
      /* background-color: ${colors.mtfu}; */
    }

   
`

export const SelectItemIndicator = styled(Select.ItemIndicator)`
    position: absolute;
    left: 0.375rem;

`

