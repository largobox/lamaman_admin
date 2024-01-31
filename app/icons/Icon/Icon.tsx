import React from 'react'
import Box from './Icon.styles'
import { Props, IconContent } from './Icon.types'


const styleIcon = (Svg: IconContent) => (props: Props) => {
    const color = props.color || 'primary'
    const size = props.size || 'middle'

    return (
        <Box
            $color={color}
            $size={size}
        >
            <Svg />
        </Box>
    )
}

export default styleIcon
