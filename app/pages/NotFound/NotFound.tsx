import React from 'react'

import { Typography } from 'uikit'
import { HumanSorryIcon } from 'icons'
import Box from './NotFound.styles'


const NotFoundPage = () => {
    return (
        <Box>
            <HumanSorryIcon
                color='light'
                size='big'
            />

            <Typography
                color='light'
                variant='h2'
                text='Страница не найдена'
            />
        </Box>
    )
}

export default NotFoundPage
