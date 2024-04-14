import { ThemedProps } from 'common-types'
import styled from 'styled-components'


export const DateBox = styled.div`
    display: flex;
`

export const TimeBox = styled.div<ThemedProps>`
    margin-top: ${(props) => props.theme.spacing(2)}px;
    display: flex;
`

export const DateTimeBox = styled.div``

export const IconBox = styled.div`
    margin-right: ${(props) => props.theme.spacing(2)}px;
`
