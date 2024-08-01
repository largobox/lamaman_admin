import React from 'react'
import Box, { Content } from './AuthenticationLayout.styles'
import { Outlet } from 'react-router-dom'


const AuthenticationLayout = () => {
    return (
        <Box>
            <Content>
                <Outlet />
            </Content>
        </Box>
    )
}

export default AuthenticationLayout
