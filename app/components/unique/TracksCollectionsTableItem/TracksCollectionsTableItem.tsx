import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RowBox, ColumnBox, ControlsBox } from 'layouts'
import { IconButton, Typography } from 'uikit'
import { Props } from './TracksCollectionsTableItem.types'
import { CalendarIcon, EditIcon, OutlinedClockIcon, RemoveIcon } from 'icons'
import { useAppDispatch } from 'hooks'
import { deleteTracksCollection } from 'store/slices/tracksCollectionsSlice'
import { prettyDate, prettyTime } from 'utils'
import {
    DateBox,
    DateTimeBox,
    IconBox,
    TimeBox,
} from './TracksCollectionsTableItem.styles'


const TracksCollectionsTableItem = (props: Props) => {
    const {
        data: { name, createdAt, id },
    } = props
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()

    const editClickHandler = () => {
        navigate(`/tracks-collections/${id}/edit`)
    }

    const removeClickHandler = () => {
        appDispatch(deleteTracksCollection(id))
    }

    return (
        <RowBox>
            <ColumnBox>
                <Typography text={name} />
            </ColumnBox>

            <ColumnBox>
                <DateTimeBox>
                    <DateBox>
                        <IconBox>
                            <CalendarIcon
                                color='dark'
                                size='small'
                            />
                        </IconBox>

                        <Typography text={prettyDate(createdAt)} />
                    </DateBox>

                    <TimeBox>
                        <IconBox>
                            <OutlinedClockIcon
                                color='dark'
                                size='small'
                            />
                        </IconBox>

                        <Typography text={prettyTime(createdAt)} />
                    </TimeBox>
                </DateTimeBox>
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
