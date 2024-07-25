import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RowBox, ColumnBox, ControlsBox } from 'layouts'
import { IconButton, Typography } from 'uikit'
import { CalendarIcon, EditIcon, OutlinedClockIcon, RemoveIcon } from 'icons'
import { useAppDispatch } from 'hooks'
import { deletePerformer } from 'store/slices/performers'
import { prettyDate, prettyTime } from 'utils'
import {
    DateBox,
    DateTimeBox,
    IconBox,
    TimeBox,
} from './PerformersTableItem.styles'
import { Props } from './PerformersTableItem.types'


const PerformersTableItem = (props: Props) => {
    const {
        data: { name, createdAt, id, updatedAt },
    } = props
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()

    const editClickHandler = () => {
        navigate(`/performers/${id}/edit`)
    }

    const removeClickHandler = () => {
        appDispatch(deletePerformer(id))
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

export default PerformersTableItem
