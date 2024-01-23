import styled from 'styled-components'

import { ThemedProps } from 'common-types'


const Box = styled.div<ThemedProps>`
    background-color: ${(props) => props.theme.colors.neutral.base};
    margin: ${(props) => props.theme.spacing(2)}px;
    height: 1px;
    width: 100%;
`

export default Box
