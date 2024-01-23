import styled from 'styled-components'

import { ThemedProps } from 'common-types'


const Box = styled.div<ThemedProps>`
    height: 100%;
    width: ${(props) => props.theme.constants.leftPanel}px;
`

export default Box
