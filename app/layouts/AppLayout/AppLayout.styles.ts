import styled from 'styled-components'
import { ThemedProps } from 'common-types'
import { ProfileCardBox } from 'unique'
import { IconButtonBox } from 'uikit'


export const LeftPanelBox = styled.div`
    width: ${(props) => props.theme.constants.leftPanel}px;
    display: flex;
`

export const ContentBox = styled.div`
    width: 900px;
    height: 100%;
    padding-top: ${(props) => props.theme.spacing(10)}px;
    padding-bottom: ${(props) => props.theme.spacing(10)}px;
    padding-left: ${(props) => props.theme.spacing(10)}px;
    padding-right: ${(props) => props.theme.spacing(10)}px;
    box-sizing: border-box;
`

const Box = styled.div<ThemedProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.base};
    height: 100vh;
    width: 100vw;

    ${ProfileCardBox} {
        margin-bottom: ${(props) => props.theme.spacing(10)}px;
    }

    ${IconButtonBox} + ${IconButtonBox} {
        margin-left: ${(props) => props.theme.spacing(1)}px;
    }
`

export default Box
