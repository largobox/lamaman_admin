import React from 'react'

import { IconButton, Typography } from 'uikit'
import { OutlinedAddIcon } from 'icons'
import { ListTopPanel } from 'app/layouts/ListLayout'


const CategoriesTopPanel = () => {
    const addHandler = () => {
        console.log('Add')
    }

    return (
        <ListTopPanel>
            <Typography
                size='h2'
                text='Список категорий'
            />

            <IconButton
                Icon={OutlinedAddIcon}
                onClick={addHandler}
                size='big'
            />
        </ListTopPanel>
    )
}

export default CategoriesTopPanel
