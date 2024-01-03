import styled, { css } from "styled-components";
import { BoxProps } from "./Typography.types";

const sizeStyles = (props: BoxProps) => {
    const { $size } = props

    if ($size === 'base') {
        return css`
			font-size: ${props.theme.fontSizes.base}px;
		`
    }

    if ($size === 'h1') {
        return css`
			font-size: ${props.theme.fontSizes.h1}px;
		`
    }
}

const Box = styled.div<BoxProps>`
    color: ${props => props.theme.colors.dark};
    user-select: none;

	${sizeStyles}
`

export default Box