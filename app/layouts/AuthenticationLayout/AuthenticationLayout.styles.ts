import styled from 'styled-components'

import { BoxProps } from 'common-types'


const Box = styled.div<BoxProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.dark};
    height: 100vh;
    width: 100vw;
`

export default Box
