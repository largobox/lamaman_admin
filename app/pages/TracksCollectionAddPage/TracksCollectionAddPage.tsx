import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightPanelLayout } from 'layouts'
import { TracksCollectionForm } from 'unique'


const TracksCollectionAddPage = () => {
    const navigate = useNavigate()

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <TracksCollectionForm />
        </RightPanelLayout>
    )
}

export default TracksCollectionAddPage
