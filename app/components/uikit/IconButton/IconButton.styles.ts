import styled, { css } from 'styled-components'

import { BoxProps } from './IconButton.types'


const colorStyles = (props: BoxProps) => {
    const {
        $color,
        theme: { colors },
    } = props

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

const Box = styled.div<BoxProps>`
    cursor: pointer;

    padding: ${(props) => props.theme.spacing(3)}px;
    border-radius: 50px;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    ${colorStyles}
`

export default Box
