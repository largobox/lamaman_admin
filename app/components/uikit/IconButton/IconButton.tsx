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
    const iconColor = isDisabled ? 'neutral' : color

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
                color={iconColor}
                size={size}
            />
        </Box>
    )
}

export default IconButton
