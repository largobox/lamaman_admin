import styled, { css } from 'styled-components'
import { BoxProps } from './Icon.types'


const sizeStyles = (props: BoxProps) => {
    const {
        $size,
        theme: { iconSizes },
    } = props

    if ($size === 'max') {
        return css`
            width: 100%;
            height: 100%;
        `
    }

    if ($size === 'small') {
        return css`
            width: ${iconSizes.small}px;
            height: ${iconSizes.small}px;
        `
    }

    if ($size === 'middle') {
        return css`
            width: ${iconSizes.middle}px;
            height: ${iconSizes.middle}px;
        `
    }

    if ($size === 'big') {
        return css`
            width: ${iconSizes.big}px;
            height: ${iconSizes.big}px;
        `
    }
}

const colorStyles = (props: BoxProps) => {
    const {
        $color,
        theme: { colors },
    } = props

    if ($color === 'primary') {
        return css`
            color: ${colors.primary.base};
        `
    }

    if ($color === 'light') {
        return css`
            color: ${colors.light};
        `
    }

    if ($color === 'danger') {
        return css`
            color: ${colors.danger.base};
        `
    }

    if ($color === 'neutral') {
        return css`
            color: ${colors.neutral.base};
        `
    }

    if ($color === 'base') {
        return css`
            color: ${colors.base};
        `
    }

    if ($color === 'secondary') {
        return css`
            color: ${colors.secondary.base};
        `
    }

    if ($color === 'success') {
        return css`
            color: ${colors.success.base};
        `
    }

    if ($color === 'dark') {
        return css`
            color: ${colors.dark};
        `
    }
}

const Box = styled.div<BoxProps>`
    display: flex;
    justify-content: center;

    transition-property: color;
    transition-duration: ${(props) => props.theme.transition.duration}s;

    ${sizeStyles}

    svg {
        ${colorStyles}
    }
`

export default Box
