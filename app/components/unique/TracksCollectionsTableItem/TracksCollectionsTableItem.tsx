import React from 'react'

import { RowBox, ColumnBox } from 'layouts'
import { Typography } from 'uikit'
import { Props } from './TracksCollectionsTableItem.types'


const TracksCollectionsTableItem = (props: Props) => {
    const {
        data: { name, createdAt },
    } = props

    return (
        <RowBox>
            <ColumnBox>
                <Typography text={name} />
            </ColumnBox>

            <ColumnBox>
                <Typography text={createdAt} />
            </ColumnBox>
        </RowBox>
    )
}

export default TracksCollectionsTableItem
