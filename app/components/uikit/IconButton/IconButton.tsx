import React from 'react'

import Box from './IconButton.styles'
import { Props } from './IconButton.types'


const IconButton = (props: Props) => {
    const { Icon, onClick, color = 'primary', size = 'middle' } = props

    return (
        <Box
            onClick={onClick}
            $color={color}
        >
            <Icon
                color={color}
                size={size}
            />
        </Box>
    )
}

export default IconButton
