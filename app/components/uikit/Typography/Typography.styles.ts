import styled, { css } from 'styled-components'

import { BoxProps } from './Typography.types'


const variantStyles = (props: BoxProps) => {
    const { $variant } = props

    if ($variant === 'base') {
        return css`
            font-size: ${props.theme.fontSizes.base}px;
            line-height: ${props.theme.fontSizes.base}px;
        `
    }

    if ($variant === 'caption') {
        return css`
            font-size: ${props.theme.fontSizes.caption}px;
            font-weight: bold;
            line-height: ${props.theme.fontSizes.caption}px;
        `
    }

    if ($variant === 'h1') {
        return css`
            font-size: ${props.theme.fontSizes.h1}px;
            line-height: ${props.theme.fontSizes.h1}px;
        `
    }

    if ($variant === 'h2') {
        return css`
            font-size: ${props.theme.fontSizes.h2}px;
            line-height: ${props.theme.fontSizes.h2}px;
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

    if ($color === 'light') {
        return css`
            color: ${props.theme.colors.light};
        `
    }

    if ($color === 'inherit') {
        return css`
            color: inherit;
        `
    }
}

const isCapitalizedStyles = (props: BoxProps) => {
    const { $isCapitalized } = props

    if ($isCapitalized) {
        return css`
            &:first-letter {
                text-transform: capitalize;
            }
        `
    }
}

const alignStyles = (props: BoxProps) => {
    const { $align } = props

    return css`
        text-align: ${$align};
    `
}

const Box = styled.div<BoxProps>`
    user-select: none;

    ${alignStyles}
    ${variantStyles}
    ${colorStyles}
    ${isCapitalizedStyles}
`

export default Box
