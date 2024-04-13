import styled from 'styled-components'

import { ColumnBox } from 'layouts'
import { TableHeaderItem } from 'app/components/uikit/TableHeader'


const Box = styled.div`
    ${TableHeaderItem} {
        &:nth-child(1) {
            flex-grow: 1;
        }

        &:nth-child(2) {
            width: 390px;
        }
    }

    ${ColumnBox} {
        &:nth-child(1) {
            flex-grow: 1;
        }

        &:nth-child(2) {
            width: 250px;
        }

        &:nth-child(3) {
            width: 140px;
        }
    }
`

export default Box
