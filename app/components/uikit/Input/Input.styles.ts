import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import theme from 'app/themes/default'


const labelHeight = theme.fontSizes.base + 3

export const Label = styled.div<ThemedProps>`
    font-size: ${(props) => props.theme.fontSizes.base}px;
    line-height: ${labelHeight}px;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: ${(props) => props.theme.spacing(1)}px;
`

export const ErrorMessage = styled.div<ThemedProps>`
    font-size: ${(props) => props.theme.fontSizes.hint}px;
    line-height: ${(props) => props.theme.fontSizes.hint}px;
    height: ${(props) => props.theme.fontSizes.hint}px;
    color: ${(props) => props.theme.colors.danger.base};
    margin-top: ${(props) => props.theme.spacing(1)}px;
    margin-bottom: ${(props) => props.theme.spacing(1)}px;
`

export const InputElement = styled.input<ThemedProps>`
    height: ${(props) => props.theme.fontSizes.base * 2 + 4}px;
    width: 100%;
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.base}px;
    padding: 0px ${(props) => props.theme.spacing(2)}px;
    border-radius: ${(props) => props.theme.borderRadius}px;
    border: 1px solid ${(props) => props.theme.colors.neutral.base};
    outline: none;
    background-color: ${(props) => props.theme.colors.light};
    box-sizing: border-box;

    &:focus {
        border: 1px solid ${(props) => props.theme.colors.neutral.dark};
    }

    &::placeholder {
        color: ${(props) => props.theme.colors.neutral.base};
    }
`

const Box = styled.div``

export default Box
