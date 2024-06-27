import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RowBox, ColumnBox, ControlsBox } from 'layouts'
import { IconButton, Typography } from 'uikit'
import { Props } from './TracksTableItem.types'
import {
    CalendarIcon,
    EditIcon,
    OutlinedClockIcon,
    PlayIcon,
    RemoveIcon,
} from 'icons'
import { useAppDispatch } from 'hooks'
import { deleteTrack } from 'store/slices/tracksSlice'
import { prettyDate, prettyTime } from 'utils'
import {
    DateBox,
    DateTimeBox,
    IconBox,
    TimeBox,
} from './TracksTableItem.styles'


const TracksCollectionsTableItem = (props: Props) => {
    const {
        data: { name, createdAt, id, updatedAt },
    } = props
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()

    const editClickHandler = () => {
        navigate(`/tracks/${id}/edit`)
    }

    const removeClickHandler = () => {
        appDispatch(deleteTrack(id))
    }

    const playClickHandler = () => {
        console.log('Play')
    }

    return (
        <RowBox>
            <ColumnBox>
                <IconButton
                    Icon={PlayIcon}
                    onClick={playClickHandler}
                />
            </ColumnBox>

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
                <DateTimeBox>
                    <DateBox>
                        <IconBox>
                            <CalendarIcon
                                color='dark'
                                size='small'
                            />
                        </IconBox>

                        <Typography text={prettyDate(updatedAt)} />
                    </DateBox>

                    <TimeBox>
                        <IconBox>
                            <OutlinedClockIcon
                                color='dark'
                                size='small'
                            />
                        </IconBox>

                        <Typography text={prettyTime(updatedAt)} />
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
