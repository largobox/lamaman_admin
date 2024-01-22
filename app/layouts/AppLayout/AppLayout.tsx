import React from 'react'

import Box, { ContentBox } from './AppLayout.styles'
import { NavigationMenu } from 'unique'
import { Props } from './AppLayout.types'


const AppLayout = (props: Props) => {
    const { children } = props

    return (
        <Box>
            <NavigationMenu />

            <ContentBox>{children}</ContentBox>
        </Box>
    )
}

export default AppLayout
