import styled from 'styled-components'

import { ThemedProps } from 'common-types'


export const InputElement = styled.input<ThemedProps>`
    height: 32px;
    font-size: ${(props) => props.theme.fontSizes.base}px;
`

export const Label = styled.div``

const Box = styled.div``

export default Box
