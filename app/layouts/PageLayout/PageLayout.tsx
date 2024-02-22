import React, { PropsWithChildren } from 'react'

import Box from './PageLayout.styles'
import { Paper } from 'uikit'


const PageLayout = (props: PropsWithChildren) => {
    const { children } = props

    return (
        <Box>
            <Paper>{children}</Paper>
        </Box>
    )
}

export default PageLayout
