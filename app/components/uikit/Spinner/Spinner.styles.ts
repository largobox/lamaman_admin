import styled, { css, keyframes } from 'styled-components'
import { SpinProps } from './Spinner.types'


const spinAnimation = keyframes`
  0% { transform: rotate(360deg); }
`

const sizeStyles = (props: SpinProps) => {
    const { $size } = props

    if ($size === 'small') {
        return css`
            width: 18px;
            height: 18px;
        `
    }

    return css`
        width: 40px;
        height: 40px;
    `
}

export const Spin = styled.div<SpinProps>`
    border: 3px solid ${(props) => props.theme.colors.base};
    border-radius: 50%;
    border-top-color: transparent;

    animation: ${spinAnimation} 1s ease-in-out infinite;

    ${sizeStyles}
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
