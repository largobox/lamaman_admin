import React from 'react'

import { Props } from './Typography.types'
import Box from './Typography.styles'


const Typography = (props: Props) => {
    const { text, size = 'base', color = 'base' } = props

    return (
        <Box
            $size={size}
            $color={color}
        >
            {text}
        </Box>
    )
}

export default Typography
