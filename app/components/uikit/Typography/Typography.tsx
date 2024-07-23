import React from 'react'

import { Props } from './Typography.types'
import Box from './Typography.styles'


const Typography = (props: Props) => {
    const {
        align = 'left',
        color = 'base',
        isCapitalized,
        text,
        variant = 'base',
    } = props

    return (
        <Box
            $align={align}
            $color={color}
            $isCapitalized={isCapitalized}
            $variant={variant}
        >
            {text}
        </Box>
    )
}

export default Typography
