import React from 'react'

import Box from './Button.styles'
import { Props } from './Button.types'


const Button = (props: Props) => {
    const { color = 'primary', label, fullWidth = false, onClick } = props

    return (
        <Box
            onClick={onClick}
            $fullWidth={fullWidth}
            $color={color}
        >
            {label}
        </Box>
    )
}

export default Button
