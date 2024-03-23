import { ThemedProps } from 'common-types'
import styled from 'styled-components'
import { IconButtonBox } from 'uikit'


export const TableHeaderItem = styled.div<ThemedProps>`
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.primary.dark};
    border: 1px solid ${(props) => props.theme.colors.neutral.base};
    padding: ${(props) => props.theme.spacing(2)}px
        ${(props) => props.theme.spacing(4)}px;
    box-sizing: border-box;

    &:not(:first-child) {
        border-left-width: 0px;
    }

    &:first-child {
        border-top-left-radius: ${(props) => props.theme.borderRadius}px;
    }

    &:last-child {
        border-top-right-radius: ${(props) => props.theme.borderRadius}px;
    }

    ${IconButtonBox} {
        margin-left: ${(props) => props.theme.spacing(1)}px;
    }
`

const Box = styled.div<ThemedProps>`
    display: flex;
`

export default Box
