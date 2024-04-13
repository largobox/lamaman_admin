import React, { PropsWithChildren } from 'react'

import Box, { ContentBox, LeftPanelBox } from './AppLayout.styles'
import { NavigationMenu, ProfileCard } from 'unique'
import { Paper } from 'uikit'


const AppLayout = (props: PropsWithChildren) => {
    const { children } = props

    return (
        <Box>
            <LeftPanelBox>
                <Paper>
                    <ProfileCard />

                    <NavigationMenu />
                </Paper>
            </LeftPanelBox>

            <ContentBox>{children}</ContentBox>
        </Box>
    )
}

export default AppLayout
