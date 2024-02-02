import React from 'react'

import Box from './IconButton.styles'
import { Props } from './IconButton.types'


const IconButton = (props: Props) => {
    const { Icon, onClick, color = 'primary' } = props

    return (
        <Box
            onClick={onClick}
            $color={color}
        >
            <Icon color={color} />
        </Box>
    )
}

export default IconButton
