import React from "react"

import { Props } from "./Typography.types"
import Box from "./Typography.styles"


const Typography = (props: Props) => {
    const {
        text,
        size = 'base',
    } = props

    return (
        <Box
            $size={size}
        >
            {text}
        </Box>
    )
}

export default Typography
