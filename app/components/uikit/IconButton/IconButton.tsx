import React from 'react'

import Box from './IconButton.styles'
import { Props } from './IconButton.types'


const IconButton = (props: Props) => {
    const {
        Icon,
        onClick,
        color = 'primary',
        size = 'middle',
        isDisabled = false,
    } = props

    const clickHandler = () => {
        if (isDisabled) {
            return
        }

        onClick()
    }

    return (
        <Box
            onClick={clickHandler}
            $color={color}
            $isDisabled={isDisabled}
        >
            <Icon
                color={color}
                size={size}
            />
        </Box>
    )
}

export default IconButton
