import styled from 'styled-components'

import { ThemedProps } from 'common-types'


export const TopBox = styled.div`
    display: flex;
    align-items: center;
`

export const IconBox = styled.div`
    height: 62px;
    width: 62px;
`

export const BottomBox = styled.div<ThemedProps>`
    margin-top: ${(props) => props.theme.spacing(1)}px;
    display: flex;
    justify-content: right;
`

export const DescriptionBox = styled.div<ThemedProps>`
    margin-left: ${(props) => props.theme.spacing(2)}px;
`

const Box = styled.div``

export default Box
