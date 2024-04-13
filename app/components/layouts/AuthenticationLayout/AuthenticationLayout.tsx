import React, { PropsWithChildren } from 'react'
import Box, { Content } from './AuthenticationLayout.styles'


const AuthenticationLayout = (props: PropsWithChildren) => {
    const { children } = props

    return (
        <Box>
            <Content>{children}</Content>
        </Box>
    )
}

export default AuthenticationLayout
