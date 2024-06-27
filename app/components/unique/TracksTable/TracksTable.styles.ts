import styled from 'styled-components'

import { ColumnBox } from 'layouts'
import { TableHeaderItem } from 'app/components/uikit/TableHeader'
import { sideOffset } from 'app/components/uikit/TableHeader/TableHeader.styles'


const controlsWidth = 140
const firstItemOffset = sideOffset + 90
const lastItemOffset = sideOffset + controlsWidth

const Box = styled.div`
    ${TableHeaderItem} {
        &:nth-child(1) {
            flex-grow: 1;
            padding-left: ${firstItemOffset}px;
        }

        &:nth-child(2) {
            width: 200px;
        }

        &:nth-child(3) {
            width: 400px;
            padding-right: ${lastItemOffset}px;
        }
    }

    ${ColumnBox} {
        &:nth-child(1) {
            display: flex;
            justify-content: centerl
            width: 90px;
        }

        &:nth-child(2) {
            flex-grow: 1;
        }

        &:nth-child(3) {
            width: 200px;
        }

        &:nth-child(4) {
            width: 260px;
        }

        &:nth-child(5) {
            width: ${controlsWidth}px;
        }
    }
`

export default Box
