import styled from 'styled-components'

import { ThemedProps } from 'common-types'


const Box = styled.div<ThemedProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.danger.base};
    height: 100vh;
    width: 100vw;

    * + * {
        text-align: center;
        margin-top: ${(props) => props.theme.spacing(2)}px;
    }
`

export default Box
