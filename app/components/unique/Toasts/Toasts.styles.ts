import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import { BoxProps } from './Toasts.types'


const width = 400
const offset = 20

export const IconBox = styled.div<ThemedProps>`
    margin-right: ${(props) => props.theme.spacing(3)}px;
`

export const MessageBox = styled.div<ThemedProps>`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.danger.light};
    color: ${(props) => props.theme.colors.danger.base};

    padding: ${(props) => props.theme.spacing(3)}px;
    box-sizing: border-box;

    border-radius: ${(props) => props.theme.borderRadius}px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.danger.base};
`

const Box = styled.div<BoxProps>`
    position: fixed;
    top: ${offset}px;
    right: ${(props) => (props.$isVisible ? offset : -width)}px;

    width: ${width}px;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: right;
`

export default Box
