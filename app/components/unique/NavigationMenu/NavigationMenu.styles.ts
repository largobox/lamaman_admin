import styled from 'styled-components'

import { BoxProps } from './NavigationMenu.types'


const Box = styled.div<BoxProps>`
    height: 100%;
    width: ${(props) => props.theme.constants.leftPanel}px;
`

export default Box
