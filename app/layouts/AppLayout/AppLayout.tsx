import React, { PropsWithChildren } from 'react'

import Box, { ContentBox } from './AppLayout.styles'
import { NavigationMenu } from 'unique'


const AppLayout = (props: PropsWithChildren) => {
    const { children } = props

    return (
        <Box>
            <NavigationMenu />

            <ContentBox>{children}</ContentBox>
        </Box>
    )
}

export default AppLayout
