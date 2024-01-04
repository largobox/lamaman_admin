import React from 'react'
import Box from './AuthenticationLayout.styles'
import { Outlet } from 'react-router-dom'


const AuthenticationLayout = () => {
    return (
        <Box>
            AuthenticationLayout
            <Outlet />
        </Box>
    )
}

export default AuthenticationLayout
