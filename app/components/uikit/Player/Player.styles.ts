import styled, { css, keyframes } from 'styled-components'

import { ThemedProps } from 'common-types'
import {
    LoadingProgressBarProps,
    PlayingProgressBarProps,
} from './Player.types'


const loadingAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

const loadingStyles = (props: LoadingProgressBarProps) => {
    const {
        $isLoading,
        theme: {
            colors: { primary },
        },
    } = props

    if ($isLoading) {
        return css`
            color: transparent;
            background: linear-gradient(
                100deg,
                ${primary.base} 30%,
                ${primary.light} 50%,
                ${primary.base} 70%
            );
            background-size: 400%;
            animation: ${loadingAnimation} 1s ease-in-out infinite;
        `
    }

    return css`
        background-color: ${(props) => props.theme.colors.primary.base};
    `
}

export const LoadingProgressBar = styled.div<LoadingProgressBarProps>`
    position: absolute;
    top: 0px;
    left: 0px;

    width: ${(props) => props.$width}%;
    height: 100%;

    border-radius: ${(props) => props.theme.borderRadius}px;

    ${loadingStyles}
`

export const PlayingProgressBar = styled.div<PlayingProgressBarProps>`
    position: absolute;
    top: 0px;
    left: 0px;

    width: ${(props) => props.$width}%;
    height: 100%;

    background-color: ${(props) => props.theme.colors.primary.dark};
    border-radius: ${(props) => props.theme.borderRadius}px;
`

export const TotalProgressBar = styled.div`
    position: relative;

    width: 100%;
    height: 26px;
    border-radius: ${(props) => props.theme.borderRadius}px;

    background-color: ${(props) => props.theme.colors.primary.light};
`

export const PropLabel = styled.div<ThemedProps>`
    width: 120px;
`

export const PropBox = styled.div<ThemedProps>`
    display: flex;
    gap: ${(props) => props.theme.spacing(1)}px;
    margin-top: ${(props) => props.theme.spacing(1)}px;
`

export const ContorlsAndDescriptionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${(props) => props.theme.spacing(2)}px;
`

export const ContorlsBox = styled.div`
    display: flex;
`

export const DescriptionBox = styled.div`
    margin-left: ${(props) => props.theme.spacing(2)}px;
`

export const DurationBox = styled.div<ThemedProps>`
    display: flex;
    justify-content: right;
    flex-grow: 1;
    gap: ${(props) => props.theme.spacing(1)}px;

    margin-top: ${(props) => props.theme.spacing(2)}px;
`

const Box = styled.div``

export default Box
