import React from 'react'
import Box, { ContentBox } from './AppLayout.styles'
import { NavigationMenu } from 'unique'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
    return (
        <Box>
            <NavigationMenu />

            <ContentBox>
                <Outlet />
            </ContentBox>
        </Box>
    )
}

export default AppLayout
