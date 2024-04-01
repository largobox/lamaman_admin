import React from 'react'

import { RightPanelLayout } from 'layouts'
import { Typography } from 'uikit'
import { useNavigate } from 'react-router-dom'


const TracksCollectionAdd = () => {
    const navigate = useNavigate()

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <Typography text='Maow' />
        </RightPanelLayout>
    )
}

export default TracksCollectionAdd
