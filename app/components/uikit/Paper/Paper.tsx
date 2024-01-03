import React, { PropsWithChildren } from "react"

import Box from "./Paper.styles"


const Paper = (props: PropsWithChildren) => {
    const { children } = props

    return (
        <Box>
            {children}
        </Box>
    )
}

export default Paper
