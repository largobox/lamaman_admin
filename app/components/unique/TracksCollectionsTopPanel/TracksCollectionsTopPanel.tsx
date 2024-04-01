import React from 'react'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { TopPanelBox } from 'layouts'
import { useNavigate } from 'react-router-dom'


const TracksCollectionsTopPanel = () => {
    const navigate = useNavigate()

    const addHandler = () => {
        navigate('/tracks-collections/add')
    }

    return (
        <TopPanelBox>
            <Typography
                size='h1'
                text='Список коллекций'
            />

            <IconButton
                Icon={OutlinedAddIcon}
                onClick={addHandler}
                size='big'
            />
        </TopPanelBox>
    )
}

export default TracksCollectionsTopPanel
