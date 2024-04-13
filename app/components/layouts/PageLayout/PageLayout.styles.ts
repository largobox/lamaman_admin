import styled from 'styled-components'

import { ThemedProps } from 'common-types'
import { IconButtonBox, PaginationBox } from 'uikit'
import { TableHeaderBox } from 'app/components/uikit/TableHeader'


export const SpinBox = styled.div`
    display: flex;
    justify-content: center;
`

export const TopPanelBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;

    ${IconButtonBox} {
        margin-left: ${(props) => props.theme.spacing(2)}px;
    }
`

export const ControlsBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ColumnBox = styled.div<ThemedProps>`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.neutral.light};

    border-width: 1px;
    border-style: solid;
    border-color: transparent;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: border-color;

    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing(3)}px
        ${(props) => props.theme.spacing(4)}px;

    &:not(:first-child) {
        border-left-width: 0px;
    }
`

export const RowBox = styled.div<ThemedProps>`
    display: flex;
    cursor: pointer;

    transition-duration: ${(props) => props.theme.transition.duration}ms;
    transition-property: background-color, border-color;

    &:hover {
        ${ColumnBox} {
            border-color: ${(props) => props.theme.colors.neutral.base};
        }
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

export const RowsBox = styled.div<ThemedProps>``

const Box = styled.div<ThemedProps>`
    width: 100%;
    height: 100%;

    ${TableHeaderBox} {
        margin-top: ${(props) => props.theme.spacing(8)}px;
        margin-bottom: ${(props) => props.theme.spacing(3)}px;
    }

    ${PaginationBox} {
        margin-top: ${(props) => props.theme.spacing(5)}px;
    }
`

export default Box
