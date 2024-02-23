import styled from 'styled-components'

import { TableSorting } from 'app/components/uikit/TableSortings'
import { ColumnBox } from 'app/layouts/PageLayout/PageLayout.styles'


const Box = styled.div`
    ${TableSorting} {
        &:nth-child(1) {
            flex-grow: 1;
        }

        &:nth-child(2) {
            width: 250px;
        }
    }

    ${ColumnBox} {
        &:nth-child(1) {
            flex-grow: 1;
        }

        &:nth-child(2) {
            width: 250px;
        }
    }
`

export default Box
