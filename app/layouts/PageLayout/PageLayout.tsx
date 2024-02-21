import React, { PropsWithChildren } from 'react'

import Box from './PageLayout.styles'


const PageLayout = (props: PropsWithChildren) => {
    const { children } = props

    return <Box>{children}</Box>
}

export default PageLayout
