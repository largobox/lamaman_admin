import styled, { css } from 'styled-components'
import { BoxProps } from './RightPanelLayout.types'


const boxVisibilityStyles = (props: BoxProps) => {
    const { $isVisible } = props

    if ($isVisible) {
        return css`
            background-color: rgba(0, 0, 0, 0.55);
        `
    }

    return css`
        background-color: rgba(0, 0, 0, 0);
    `
}

const foregroundVisibilityStyles = (props: BoxProps) => {
    const { $isVisible } = props

    if ($isVisible) {
        return css`
            right: 0px;
        `
    }

    return css`
        right: -500px;
    `
}

export const Foreground = styled.div<BoxProps>`
    position: fixed;
    top: 0px;

    height: 100vh;
    width: 500px;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: right;

    ${foregroundVisibilityStyles}
`

const Box = styled.div<BoxProps>`
    position: fixed;
    top: 0px;
    right: 0px;

    height: 100vh;
    width: 100vw;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    ${boxVisibilityStyles}
`

export default Box
