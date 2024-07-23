import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { TopPanelBox } from 'layouts'


const TracksCollectionsTopPanel = () => {
    const navigate = useNavigate()

    const addHandler = () => {
        navigate('/tracks-collections/add')
    }

    return (
        <TopPanelBox>
            <Typography
                variant='h1'
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
