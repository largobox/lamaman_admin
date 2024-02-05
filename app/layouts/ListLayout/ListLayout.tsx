import React, { PropsWithChildren } from 'react'

import Box from './ListLayout.styles'


const ListLayout = (props: PropsWithChildren) => {
    const { children } = props

    return <Box>{children}</Box>
}

export default ListLayout
