import styled from 'styled-components'

import { ThemedProps } from 'common-types'


export const Content = styled.div<ThemedProps>`
    padding: ${(props) => props.theme.spacing(2)};
`

const Box = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.base};
    height: 100vh;
    width: 100vw;
`

export default Box
