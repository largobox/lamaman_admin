import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import { IconButtonBox } from 'uikit'
import { TableSortingsBox } from 'app/components/uikit/TableSortings'


export const TopPanelBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;

    ${IconButtonBox} {
        margin-left: ${(props) => props.theme.spacing(2)}px;
    }
`

export const ColumnBox = styled.div<ThemedProps>`
    border: 1px solid ${(props) => props.theme.colors.neutral.base};
    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing(3)}px
        ${(props) => props.theme.spacing(4)}px;

    &:not(:first-child) {
        border-left-width: 0px;
    }
`

export const RowBox = styled.div<ThemedProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.neutral.light};
    cursor: pointer;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color, border-color;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.light};
    }

    &:not(:first-child) {
        margin-top: ${(props) => props.theme.spacing(3)}px;
    }

    &:last-child {
        ${ColumnBox} {
            &:first-child {
                border-bottom-left-radius: ${(props) =>
                    props.theme.borderRadius}px;
            }

            &:last-child {
                border-bottom-right-radius: ${(props) =>
                    props.theme.borderRadius}px;
            }
        }
    }
`

const Box = styled.div<ThemedProps>`
    width: 100%;
    height: 100%;

    ${TableSortingsBox} {
        margin-top: ${(props) => props.theme.spacing(8)}px;
        margin-bottom: ${(props) => props.theme.spacing(3)}px;
    }
`

export default Box
