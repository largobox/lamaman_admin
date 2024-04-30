import styled, { css } from 'styled-components'

import { ThemedProps } from 'common-types'
import { labelHeight } from '../Input/Input.styles'
import { ListItemProps, ValueProps } from './Select.types'


const height = 36
const listTopOffset = labelHeight + height + 4 + 4

const selectedListItemStyles = (props: ListItemProps) => {
    const { $isSelected, theme } = props

    if ($isSelected) {
        return css`
            background-color: ${theme.colors.neutral.dark};
            color: ${(props) => props.theme.colors.light};
        `
    }

    return css`
        background-color: ${theme.colors.neutral.light};
        color: ${(props) => props.theme.colors.dark};
    `
}

const disabledStyles = (props: ValueProps) => {
    const { $isDisabled, theme } = props

    if ($isDisabled) {
        return css``
    }

    return css`
        &:focus {
            border-color: ${theme.colors.neutral.dark};
        }
    `
}

export const ValueBox = styled.div`
    margin-left: ${(props) => props.theme.spacing(2)}px;
`

export const Value = styled.div<ValueProps>`
    display: flex;
    align-items: center;

    height: ${height}px;
    width: 100%;

    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.neutral.light};
    border-radius: ${(props) => props.theme.borderRadius}px;

    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.base}px;

    cursor: pointer;

    ${disabledStyles}
`

export const ListItem = styled.div<ListItemProps>`
    font-size: ${(props) => props.theme.fontSizes.base}px;
    padding: ${(props) => props.theme.spacing(2)}px
        ${(props) => props.theme.spacing(4)}px;
    cursor: pointer;

    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.neutral.dark};

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    &:first-child {
        border-top-left-radius: ${(props) => props.theme.borderRadius}px;
        border-top-right-radius: ${(props) => props.theme.borderRadius}px;
    }

    &:last-child {
        border-bottom-left-radius: ${(props) => props.theme.borderRadius}px;
        border-bottom-right-radius: ${(props) => props.theme.borderRadius}px;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.neutral.base};
    }

    &:not(:first-child) {
        border-top-color: transparent;
    }

    ${selectedListItemStyles}
`

export const List = styled.div<ThemedProps>`
    position: absolute;
    left: 0px;
    top: ${listTopOffset}px;

    width: 100%;

    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.shadow.base}px;
`

export const SpinnerBox = styled.div`
    width: 100%;
    height: 100%;

    cursor: not-allowed;

    position: relative;
`

const Box = styled.div<ThemedProps>`
    position: relative;

    width: 100%;
`

export default Box
