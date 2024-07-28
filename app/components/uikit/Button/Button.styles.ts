import styled, { css } from 'styled-components'

import { BoxProps } from './Button.types'


const colorStyles = (props: BoxProps) => {
    const {
        $color,
        theme: { colors },
    } = props

    if ($color === 'primary') {
        return css`
            background-color: ${colors.primary.base};
            border-color: ${colors.primary.base};

            &:focus {
                background-color: ${colors.primary.light};
            }

            &:hover {
                background-color: ${colors.primary.dark};
                border-color: ${colors.primary.dark};
            }
        `
    }

    if ($color === 'secondary') {
        return css`
            background-color: ${colors.secondary.base};
            border-color: ${colors.secondary.base};

            &:focus {
                background-color: ${colors.secondary.light};
            }

            &:hover {
                background-color: ${colors.secondary.dark};
                border-color: ${colors.secondary.dark};
            }
        `
    }
}

const Box = styled.button<BoxProps>`
    height: 40px;
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    color: ${(props) => props.theme.colors.light};
    border-radius: ${(props) => props.theme.borderRadius}px;
    font-size: ${(props) => props.theme.fontSizes.base}px;
    outline: none;
    box-shadow: ${(props) => props.theme.shadow.base}px;

    border-width: 1px;
    border-style: solid;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color, border-color;

    ${colorStyles}
`

export default Box
