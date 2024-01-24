import styled from 'styled-components'

import { ThemedProps } from 'common-types'


const Box = styled.div<ThemedProps>`
    height: 100%;
    width: 100%;
    padding: ${(props) => props.theme.spacing(6)}px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.paper};
    border-radius: ${(props) => props.theme.borderRadius}px;
    box-shadow: ${(props) => props.theme.shadow.base};
`

export default Box
