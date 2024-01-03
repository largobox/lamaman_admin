import styled from 'styled-components'
import { BoxProps } from './AppLayout.types'


export const ContentBox = styled.div`
    margin-top: ${(props) => props.theme.spacing(5)}px;
    margin-bottom: ${(props) => props.theme.spacing(5)}px;
    margin-left: ${(props) => props.theme.spacing(10)}px;
    margin-right: ${(props) => props.theme.spacing(5)}px;
`

const Box = styled.div<BoxProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.light};
    height: 100vh;
    width: 100vw;
`

export default Box
