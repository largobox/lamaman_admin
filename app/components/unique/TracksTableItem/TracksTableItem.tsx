import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RowBox, ColumnBox, ControlsBox } from 'layouts'
import { IconButton, Typography } from 'uikit'
import { Props } from './TracksTableItem.types'
import {
    CalendarIcon,
    DownloadIcon,
    EditIcon,
    OutlinedClockIcon,
    PlayIcon,
    RemoveIcon,
} from 'icons'
import { useAppDispatch, useAppSelector } from 'hooks'
import { deleteTrack } from 'store/slices/tracks'
import { prettyDate, prettyTime } from 'utils'
import {
    DateBox,
    DateTimeBox,
    IconBox,
    TimeBox,
} from './TracksTableItem.styles'
import {
    downloadFile,
    isFileLoadingOrHasErrorSelector,
} from 'store/slices/files'


const TracksCollectionsTableItem = (props: Props) => {
    const {
        data: { name, createdAt, id, updatedAt, fileId },
    } = props
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()
    const isDownloadBtnDisabled = useAppSelector(
        isFileLoadingOrHasErrorSelector(fileId),
    )

    const downloadClickHandler = () => {
        appDispatch(downloadFile(fileId))
    }

    const editClickHandler = () => {
        navigate(`/tracks/${id}/edit`)
    }

    const removeClickHandler = () => {
        appDispatch(deleteTrack(id))
    }

    const playClickHandler = () => {
        navigate(`/tracks/${id}/play`)
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
                        isDisabled={isDownloadBtnDisabled}
                        onClick={downloadClickHandler}
                        Icon={DownloadIcon}
                    />

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
