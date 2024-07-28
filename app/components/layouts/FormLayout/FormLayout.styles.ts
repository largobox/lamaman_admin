import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import { InputBox } from 'app/components/uikit/Input'
import { ButtonBox } from 'app/components/uikit/Button'
import { FormWrapper } from 'app/components/uikit/Form'


export const FormHeader = styled.div<ThemedProps>`
    margin-bottom: ${(props) => props.theme.spacing(6)}px;
`

const Box = styled.div<ThemedProps>`
    height: 100%;
    width: 100%;

    ${InputBox} + ${InputBox} {
        margin-top: ${(props) => props.theme.spacing(3)}px;
    }

    ${FormWrapper} {
        & > ${ButtonBox} {
            margin-top: ${(props) => props.theme.spacing(6)}px;
        }
    }
`

export default Box
