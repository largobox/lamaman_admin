import React from 'react'

import { RowBox, ColumnBox, ControlsBox } from 'layouts'
import { IconButton, Typography } from 'uikit'
import { Props } from './TracksCollectionsTableItem.types'
import { EditIcon, RemoveIcon } from 'icons'


const TracksCollectionsTableItem = (props: Props) => {
    const {
        data: { name, createdAt },
    } = props

    const editClickHandler = () => {
        console.log('Edit')
    }

    const removeClickHandler = () => {
        console.log('Delete')
    }

    return (
        <RowBox>
            <ColumnBox>
                <Typography text={name} />
            </ColumnBox>

            <ColumnBox>
                <Typography text={createdAt} />
            </ColumnBox>

            <ColumnBox>
                <ControlsBox>
                    <IconButton
                        onClick={editClickHandler}
                        Icon={EditIcon}
                    />

                    <IconButton
                        color='danger'
                        onClick={removeClickHandler}
                        Icon={RemoveIcon}
                    />
                </ControlsBox>
            </ColumnBox>
        </RowBox>
    )
}

export default TracksCollectionsTableItem
