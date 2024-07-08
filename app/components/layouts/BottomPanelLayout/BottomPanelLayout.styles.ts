import styled, { css } from 'styled-components'
import { BoxProps } from './BottomPanelLayout.types'


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
            bottom: 0px;
        `
    }

    return css`
        bottom: -200px;
    `
}

export const Foreground = styled.div<BoxProps>`
    position: fixed;

    height: 200px;
    width: 100vw;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: bottom;

    ${foregroundVisibilityStyles}
`

const Box = styled.div<BoxProps>`
    position: fixed;
    top: 0px;
    left: 0px;

    height: 100vh;
    width: 100vw;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color;

    ${boxVisibilityStyles}
`

export default Box
