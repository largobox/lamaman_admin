import React from 'react'

import { Props } from './Typography.types'
import Box from './Typography.styles'


const Typography = (props: Props) => {
    const {
        align = 'left',
        color = 'base',
        isBold,
        isCapitalized,
        text,
        size = 'base',
    } = props

    return (
        <Box
            $align={align}
            $color={color}
            $isBold={isBold}
            $isCapitalized={isCapitalized}
            $size={size}
        >
            {text}
        </Box>
    )
}

export default Typography
