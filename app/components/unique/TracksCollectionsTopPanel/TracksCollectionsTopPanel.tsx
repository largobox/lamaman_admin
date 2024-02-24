import React from 'react'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { TopPanelBox } from 'layouts'


const TracksCollectionsTopPanel = () => {
    const addHandler = () => {
        console.log('Add')
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
