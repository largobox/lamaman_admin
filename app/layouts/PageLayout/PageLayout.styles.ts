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

export const TableBox = styled.div<ThemedProps>`
    margin-top: ${(props) => props.theme.spacing(8)}px;
`

const Box = styled.div<ThemedProps>`
    width: 100%;
    height: 100%;

    ${TableSortingsBox} {
        margin-top: ${(props) => props.theme.spacing(8)}px;
    }
`

export default Box
