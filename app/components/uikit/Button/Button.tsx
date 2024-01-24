import React from 'react'

import Box from './Button.styles'
import { Props } from './Button.types'


const Button = (props: Props) => {
    const { label, fullWidth = false, onClick } = props

    return (
        <Box onClick={onClick} $fullWidth={fullWidth}>
            {label}
        </Box>
    )
}

export default Button
