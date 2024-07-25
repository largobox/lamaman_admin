import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { BottomPanelLayout } from 'layouts'
import { Player, Spinner } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    isLoadedSelector,
    isLoadingSelector,
    playPlayer,
} from 'store/slices/player'


const TrackPlayPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isLoadingSelector)
    const isLoaded = useAppSelector(isLoadedSelector)

    useEffect(() => {
        appDispatch(playPlayer(params.id))
    }, [])

    const closeHandler = () => {
        navigate('/tracks')
    }

    return (
        <BottomPanelLayout onClose={closeHandler}>
            {isLoading && <Spinner />}

            {isLoaded && <Player />}
        </BottomPanelLayout>
    )
}

export default TrackPlayPage
