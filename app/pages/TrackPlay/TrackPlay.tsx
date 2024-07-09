import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { BottomPanelLayout } from 'layouts'
import { Spinner, Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import { isPlayLoadingSelector, playTrack } from 'store/slices/tracksSlice'


const TrackPlayPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isPlayLoadingSelector)

    useEffect(() => {
        appDispatch(playTrack(params.id))
    }, [])

    const closeHandler = () => {
        navigate('/tracks')
    }

    return (
        <BottomPanelLayout onClose={closeHandler}>
            {isLoading && <Spinner />}

            <Typography text='Some player' />
        </BottomPanelLayout>
    )
}

export default TrackPlayPage
