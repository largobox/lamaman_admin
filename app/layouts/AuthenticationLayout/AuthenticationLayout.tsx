import React from 'react'
import Box from './AuthenticationLayout.styles'
import { Props } from './AuthenticationLayout.types'


const AuthenticationLayout = (props: Props) => {
    const { children } = props

    return <Box>{children}</Box>
}

export default AuthenticationLayout
