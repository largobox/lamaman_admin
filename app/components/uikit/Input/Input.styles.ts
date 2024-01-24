import styled from 'styled-components'

import { ThemedProps } from 'common-types'


export const InputElement = styled.input<ThemedProps>`
    height: 36px;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.base}px;
    padding: 0px ${(props) => props.theme.spacing(2)}px;
    border-radius: ${(props) => props.theme.borderRadius}px;
    border: 1px solid ${(props) => props.theme.colors.neutral.light};
    outline: none;
    background-color: ${(props) => props.theme.colors.light};
    box-sizing: border-box;

    &:focus {
        border: 1px solid ${(props) => props.theme.colors.neutral.dark};
    }
`

export const Label = styled.div``

const Box = styled.div``

export default Box
