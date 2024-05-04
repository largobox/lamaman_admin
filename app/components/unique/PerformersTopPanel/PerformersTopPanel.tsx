import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { TopPanelBox } from 'layouts'


const PerformersTopPanel = () => {
    const navigate = useNavigate()

    const addHandler = () => {
        navigate('/performers/add')
    }

    return (
        <TopPanelBox>
            <Typography
                size='h1'
                text='Список исполнителей'
            />

            <IconButton
                Icon={OutlinedAddIcon}
                onClick={addHandler}
                size='big'
            />
        </TopPanelBox>
    )
}

export default PerformersTopPanel
