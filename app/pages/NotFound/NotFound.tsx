import React from 'react'

import { Typography } from 'uikit'
import { ErrorLayout } from 'layouts'
import { HumanSorryIcon } from 'icons'


const NotFound = () => {
    return (
        <ErrorLayout>
            <HumanSorryIcon
                color='light'
                size='big'
            />

            <Typography
                color='light'
                size='h2'
                text='Страница не найдена'
            />
        </ErrorLayout>
    )
}

export default NotFound
