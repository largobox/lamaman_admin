import styled, { css } from 'styled-components'

import { BoxProps } from './Typography.types'


const sizeStyles = (props: BoxProps) => {
    const { $size } = props

    if ($size === 'base') {
        return css`
            font-size: ${props.theme.fontSizes.base}px;
        `
    }

    if ($size === 'h1') {
        return css`
            font-size: ${props.theme.fontSizes.h1}px;
        `
    }

    if ($size === 'h2') {
        return css`
            font-size: ${props.theme.fontSizes.h2}px;
        `
    }
}

const colorStyles = (props: BoxProps) => {
    const { $color } = props

    if ($color === 'base') {
        return css`
            color: ${props.theme.colors.dark};
        `
    }

    if ($color === 'inherit') {
        return css`
            color: inherit;
        `
    }
}

const Box = styled.div<BoxProps>`
    user-select: none;

    ${sizeStyles}
    ${colorStyles}
`

export default Box
