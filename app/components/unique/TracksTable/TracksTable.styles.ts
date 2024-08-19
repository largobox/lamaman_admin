import styled from 'styled-components'

import { ColumnBox } from 'layouts'
import { TableHeaderItem } from 'app/components/uikit/TableHeader'
import { sideOffset } from 'app/components/uikit/TableHeader/TableHeader.styles'


const controlsWidth = 190
const firstItemOffset = sideOffset + 90
const lastItemOffset = sideOffset + controlsWidth

const Box = styled.div`
    ${TableHeaderItem} {
        &:nth-child(1) {
            flex-grow: 1;
            padding-left: ${firstItemOffset}px;
        }

        &:nth-child(2) {
            width: 190px;
        }

        &:nth-child(3) {
            width: 140px;
        }

        &:nth-child(4) {
            width: 140px;
        }

        &:nth-child(5) {
            width: 340px;
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
            width: 190px;
        }

        &:nth-child(4) {
            width: 140px;
        }

        &:nth-child(5) {
            width: 140px;
        }

        &:nth-child(6) {
            width: 150px;
        }

        &:nth-child(7) {
            width: ${controlsWidth}px;
        }
    }
`

export default Box
