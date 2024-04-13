import React, { PropsWithChildren } from 'react'

import Box from './FormLayout.styles'


const FormLayout = (props: PropsWithChildren) => {
    const { children } = props

    return <Box>{children}</Box>
}

export default FormLayout
