import styled from 'styled-components'

import { BoxProps } from './Divider.types'


const Box = styled.div<BoxProps>`
    background-color: ${(props) => props.theme.colors.neutral.base};
    margin: ${(props) => props.theme.spacing(2)}px;
    height: 1px;
    width: 100%;
`

export default Box
