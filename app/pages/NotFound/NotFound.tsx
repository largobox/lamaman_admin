import React from 'react'

import { Typography } from 'uikit'
import { ErrorLayout } from 'layouts'
import { HumanSorryIcon } from 'icons'


const NotFoundPage = () => {
    return (
        <ErrorLayout>
            <HumanSorryIcon
                color='light'
                size='big'
            />

            <Typography
                color='light'
                variant='h2'
                text='Страница не найдена'
            />
        </ErrorLayout>
    )
}

export default NotFoundPage
