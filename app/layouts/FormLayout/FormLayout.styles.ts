import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import { InputBox } from 'app/components/uikit/Input'


export const FormHeader = styled.div<ThemedProps>`
    margin-bottom: ${(props) => props.theme.spacing(6)}px;
    display: flex;
    justify-content: center;
`

const Box = styled.div<ThemedProps>`
    ${InputBox} + ${InputBox} {
        margin-top: ${(props) => props.theme.spacing(3)}px;
    }
`

export default Box
