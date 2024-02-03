import React from 'react'

import { Props } from './Typography.types'
import Box from './Typography.styles'


const Typography = (props: Props) => {
    const { isBold, isCapitalized, text, size = 'base', color = 'base' } = props

    return (
        <Box
            $size={size}
            $color={color}
            $isBold={isBold}
            $isCapitalized={isCapitalized}
        >
            {text}
        </Box>
    )
}

export default Typography
