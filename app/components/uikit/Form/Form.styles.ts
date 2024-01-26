import styled from 'styled-components'

import { FormWrapperProps } from './Form.types'


export const Foreground = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;

    height: 100%;
    width: 100%;

    cursor: not-allowed;
`

export const FormWrapper = styled.form<FormWrapperProps>`
    height: 100%;
    width: 100%;

    opacity: ${(props) => (props.$isLoading ? 0.5 : 1)};
`

const Box = styled.div`
    position: relative;

    height: 100%;
    width: 100%;
`

export default Box
