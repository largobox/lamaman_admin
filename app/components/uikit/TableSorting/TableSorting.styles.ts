import { ThemedProps } from 'common-types'
import styled from 'styled-components'
import { IconButtonBox } from 'uikit'


const Box = styled.div<ThemedProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.neutral.light};
    border: 1px solid ${(props) => props.theme.colors.neutral.base};
    padding: ${(props) => props.theme.spacing(1)}px
        ${(props) => props.theme.spacing(4)}px;

    &:not(:first-child) {
        border-left-width: 0px;
    }

    &:first-child {
        border-top-left-radius: ${(props) => props.theme.borderRadius}px;
        border-bottom-left-radius: ${(props) => props.theme.borderRadius}px;
    }

    &:last-child {
        border-top-right-radius: ${(props) => props.theme.borderRadius}px;
        border-bottom-right-radius: ${(props) => props.theme.borderRadius}px;
    }

    ${IconButtonBox} {
        margin-left: ${(props) => props.theme.spacing(1)}px;
    }
`

export default Box
