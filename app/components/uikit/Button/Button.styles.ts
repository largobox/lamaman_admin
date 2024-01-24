import styled from 'styled-components'

import { BoxProps } from './Button.types'


const Box = styled.button<BoxProps>`
    height: 40px;
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary.base};
    color: ${(props) => props.theme.colors.light};
    border-radius: ${(props) => props.theme.borderRadius}px;
    font-size: ${(props) => props.theme.fontSizes.base}px;
    outline: none;
    box-shadow: ${(props) => props.theme.shadow.base}px;

    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.primary.base};

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color, border-color;

    &:focus {
        background-color: ${(props) => props.theme.colors.primary.light};
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
        border-color: ${(props) => props.theme.colors.primary.dark};
    }
`

export default Box
