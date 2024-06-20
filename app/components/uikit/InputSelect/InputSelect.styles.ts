import styled, { css } from 'styled-components'

import { ThemedProps } from 'common-types'
import { ListItemProps, ValueProps } from './InputSelect.types'
import theme from 'app/themes/default'


const height = theme.fontSizes.base * 2 + 4
const labelHeight = theme.fontSizes.base + 3
const listTopOffset = labelHeight + 4 + height + 4
const iconBoxTopOffset = labelHeight + 4

const selectedListItemStyles = (props: ListItemProps) => {
    const { $isSelected, theme } = props

    if ($isSelected) {
        return css`
            background-color: ${theme.colors.neutral.dark};
            color: ${(props) => props.theme.colors.light};
        `
    }
}

const hoveredListItemStyles = (props: ListItemProps) => {
    const { $isHovered, $isSelected, theme } = props

    if ($isHovered && $isSelected) {
        return css`
            &::before {
                background-color: ${theme.colors.light};
            }
        `
    }

    if ($isHovered) {
        return css`
            &::before {
                background-color: ${theme.colors.dark};
            }
        `
    }
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

export const Value = styled.div<ThemedProps>`
    margin-left: ${(props) => props.theme.spacing(2)}px;
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.base}px;
`

export const RemovableValueBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.neutral.dark};
    border-radius: ${(props) => props.theme.borderRadius}px;
    padding: ${(props) => props.theme.spacing(1)}px
        ${(props) => props.theme.spacing(2)}px;
`

export const RemovableValuesBox = styled.div<ThemedProps>`
    display: flex;
    margin-top: ${(props) => props.theme.spacing(1)}px;

    ${RemovableValueBox} + ${RemovableValueBox} {
        margin-left: ${(props) => props.theme.spacing(1)}px;
    }
`

export const RemovableValue = styled.div<ThemedProps>`
    user-select: none;
    margin-right: ${(props) => props.theme.spacing(1)}px;
    font-size: ${(props) => props.theme.fontSizes.base}px;
    color: ${(props) => props.theme.colors.light};
`

export const ValueBox = styled.div<ValueProps>`
    display: flex;
    align-items: center;

    height: ${height}px;
    width: 100%;

    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.neutral.base};
    border-radius: ${(props) => props.theme.borderRadius}px;
    box-sizing: border-box;

    background-color: ${(props) => props.theme.colors.light};

    cursor: pointer;

    ${disabledStyles}
`

export const ListItem = styled.div<ListItemProps>`
    font-size: ${(props) => props.theme.fontSizes.base}px;
    padding-top: ${(props) => props.theme.spacing(2)}px;
    padding-bottom: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(6)}px;
    cursor: pointer;
    user-select: none;

    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.neutral.light};

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

    &:not(:first-child) {
        border-top-color: transparent;
    }

    &::before {
        display: inline-block;
        width: ${(props) => props.theme.spacing(2)}px;
        height: ${(props) => props.theme.spacing(2)}px;
        margin: 0px ${(props) => props.theme.spacing(2)}px;
        background-color: transparent;
        border-radius: 50%;
        content: '';
    }

    ${selectedListItemStyles}
    ${hoveredListItemStyles}
`

export const List = styled.div<ThemedProps>`
    position: absolute;
    left: 0px;
    top: ${listTopOffset}px;

    width: 100%;
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.shadow.base}px;
    border-radius: ${(props) => props.theme.borderRadius}px;

    z-index: ${(props) => props.theme.zIndex.menu};
`

export const SpinnerBox = styled.div`
    width: 100%;
    height: 100%;

    cursor: not-allowed;

    position: relative;
`

export const IconBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    height: ${height}px;

    position: absolute;
    right: 8px;
    top: ${iconBoxTopOffset}px;
`

const Box = styled.div<ThemedProps>`
    position: relative;

    width: 100%;
`

export default Box
