import styled, { keyframes } from 'styled-components'

import { ThemedProps } from 'common-types'


const spinAnimation = keyframes`
  0% { transform: rotate(360deg); }
`

export const Spin = styled.div<ThemedProps>`
    width: 40px;
    height: 40px;

    border: 3px solid ${(props) => props.theme.colors.base};
    border-radius: 50%;
    border-top-color: transparent;

    animation: ${spinAnimation} 1s ease-in-out infinite;
`

const Box = styled.div`
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export default Box
