import React from 'react'

import Box from './Button.styles'
import { Props } from './Button.types'


const Button = (props: Props) => {
    const { label, fullWidth = false } = props

    return <Box $fullWidth={fullWidth}>{label}</Box>
}

export default Button
