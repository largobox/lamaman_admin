import styled, { css } from "styled-components";

import { BoxProps } from "./NavigationMenuItem.types";


const colorStyles = (props: BoxProps) => {
    const { $isSelected } = props

    if ($isSelected) {
        return css`
			background-color: ${props=> props.theme.colors.neutral.dark};
		`
    }

    return css`
		&:hover {
			background-color: ${props=> props.theme.colors.neutral.light};
		}
	`
}

const Box = styled.div<BoxProps>`
	padding: ${props=> props.theme.spacing(2)}px;
	cursor: pointer;
    border-radius: ${props => props.theme.borderRadius}px;

    transition-duration: ${props => props.theme.transition.duration}ms;
    transition-property: background-color;

    &:not(:first-child) {
    	margin-top: ${props => props.theme.spacing(1)}px;
    }

    ${colorStyles}
 `

export default Box