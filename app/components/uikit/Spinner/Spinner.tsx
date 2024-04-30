import React from 'react'

import Box, { Spin } from './Spinner.styles'
import { Props } from './Spinner.types'


const Spinner = (props: Props) => {
    const { size = 'middle' } = props

    return (
        <Box>
            <Spin $size={size} />
        </Box>
    )
}

export default Spinner
