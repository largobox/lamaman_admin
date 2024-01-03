import styled, { css } from 'styled-components'

import { BoxProps } from './NavigationMenuItem.types'


const isSelectedStyles = (props: BoxProps) => {
    const { $isSelected } = props

    if ($isSelected) {
        return css`
            background-color: ${(props) => props.theme.colors.neutral.dark};
            box-shadow: ${(props) => props.theme.shadow.base};
            color: ${(props) => props.theme.colors.light};
        `
    }

    return css`
        background-color: ${(props) => props.theme.colors.neutral.light};
        box-shadow: ${(props) => props.theme.shadow.base};

        &:hover {
            background-color: ${(props) => props.theme.colors.neutral.base};
        }
    `
}

const Box = styled.div<BoxProps>`
    padding: ${(props) => props.theme.spacing(3)}px;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius}px;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    &:not(:first-child) {
        margin-top: ${(props) => props.theme.spacing(4)}px;
    }

    ${isSelectedStyles}
`

export default Box
