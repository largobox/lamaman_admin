import React from 'react'

import Box, { ContentBox, LeftPanelBox } from './AppLayout.styles'
import { NavigationMenu, ProfileCard } from 'unique'
import { Paper } from 'uikit'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
    return (
        <Box>
            <LeftPanelBox>
                <Paper>
                    <ProfileCard />

                    <NavigationMenu />
                </Paper>
            </LeftPanelBox>

            <ContentBox>
                <Outlet />
            </ContentBox>
        </Box>
    )
}

export default AppLayout
