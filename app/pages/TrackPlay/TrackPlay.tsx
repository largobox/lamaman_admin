import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BottomPanelLayout } from 'layouts'
import { Typography } from 'uikit'


const TrackPlayPage = () => {
    const navigate = useNavigate()

    const closeHandler = () => {
        navigate('/tracks')
    }

    return (
        <BottomPanelLayout onClose={closeHandler}>
            <Typography text='Some player' />
        </BottomPanelLayout>
    )
}

export default TrackPlayPage
