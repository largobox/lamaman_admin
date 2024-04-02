import styled, { css } from 'styled-components'

import { BoxProps } from './IconButton.types'


const colorStyles = (props: BoxProps) => {
    const {
        $color,
        $isDisabled,
        theme: { colors },
    } = props

    if ($isDisabled) {
        return css``
    }

    if ($color === 'danger') {
        return css`
            &:hover {
                background-color: ${colors.danger.light};
            }
        `
    }

    if ($color === 'primary') {
        return css`
            &:hover {
                background-color: ${colors.primary.light};
            }
        `
    }

    if ($color === 'secondary') {
        return css`
            &:hover {
                background-color: ${colors.secondary.light};
            }
        `
    }

    if ($color === 'neutral') {
        return css`
            &:hover {
                background-color: ${colors.neutral.light};
            }
        `
    }
}

const disablingStyles = (props: BoxProps) => {
    const { $isDisabled } = props

    if ($isDisabled) {
        return css`
            cursor: not-allowed;
        `
    }

    return css`
        cursor: pointer;
    `
}

const Box = styled.div<BoxProps>`
    padding: ${(props) => props.theme.spacing(3)}px;
    border-radius: 50px;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    ${disablingStyles}
    ${colorStyles}
`

export default Box
