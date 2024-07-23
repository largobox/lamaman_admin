import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { TopPanelBox } from 'layouts'


const TracksTopPanel = () => {
    const navigate = useNavigate()

    const addHandler = () => {
        navigate('/tracks/add')
    }

    return (
        <TopPanelBox>
            <Typography
                variant='h1'
                text='Список трэков'
            />

            <IconButton
                Icon={OutlinedAddIcon}
                onClick={addHandler}
                size='big'
            />
        </TopPanelBox>
    )
}

export default TracksTopPanel
