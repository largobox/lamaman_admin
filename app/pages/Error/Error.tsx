import React from 'react'
import Box from './Error.styles'
import { Typography } from 'uikit'
import { HumanSorryIcon } from 'icons'


const ErrorPage = () => {
    return (
        <Box>
            <HumanSorryIcon
                color='light'
                size='big'
            />

            <Typography
                variant='h2'
                color='light'
                text='Похоже у нас произошла ошибка'
            />

            <Typography
                color='light'
                text='Мы уже пошли с ней разбираться'
            />

            <Typography
                variant='hint'
                color='light'
                text='Вжуух!'
            />
        </Box>
    )
}

export default ErrorPage
