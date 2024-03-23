import styled from 'styled-components'

import { TableHeaderItem } from 'app/components/uikit/TableHeader'
import { ColumnBox } from 'app/layouts/PageLayout/PageLayout.styles'


const Box = styled.div`
    ${TableHeaderItem} {
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
