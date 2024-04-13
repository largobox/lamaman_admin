import React, { PropsWithChildren } from 'react'
import Box from './ErrorLayout.styles'


const ErrorLayout = (props: PropsWithChildren) => {
    const { children } = props

    return <Box>{children}</Box>
}

export default ErrorLayout
