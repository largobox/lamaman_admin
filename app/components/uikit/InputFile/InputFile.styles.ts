import theme from 'app/themes/default'
import { ThemedProps } from 'common-types'
import styled from 'styled-components'


const height = theme.fontSizes.base * 2 + 4
const labelHeight = theme.fontSizes.base + 3
const iconBoxTopOffset = labelHeight + 4

export const IconBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    height: ${height}px;

    position: absolute;
    right: 8px;
    top: ${iconBoxTopOffset}px;
`

export const FileName = styled.div<ThemedProps>`
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.base}px;
`

export const ValueBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;

    width: 100%;
    height: ${(props) => props.theme.fontSizes.base * 2 + 4}px;

    background-color: ${(props) => props.theme.colors.light};

    outline: none;
    border-radius: ${(props) => props.theme.borderRadius}px;
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.neutral.base};
    border-style: solid;
    box-sizing: border-box;

    padding: 0px ${(props) => props.theme.spacing(2)}px;

    cursor: pointer;

    &:focus {
        border-color: ${(props) => props.theme.colors.neutral.dark};
    }
`

const Box = styled.div`
    position: relative;

    width: 100%;
`

export default Box
