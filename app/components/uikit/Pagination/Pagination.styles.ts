import styled from 'styled-components'

import { ThemedProps } from 'common-types'


export const LabelCont = styled.div<ThemedProps>`
    margin-left: ${(props) => props.theme.spacing(2)}px;
    margin-right: ${(props) => props.theme.spacing(2)}px;
`

const Box = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Box
