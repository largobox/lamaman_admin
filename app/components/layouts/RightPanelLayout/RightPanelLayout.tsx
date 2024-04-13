import React, { MouseEvent, useEffect } from 'react'

import Box, { Foreground } from './RightPanelLayout.styles'
import { Paper } from 'uikit'
import { Props } from './RightPanelLayout.types'
import { useKeyPress } from 'hooks'


const RightPanelLayout = (props: Props) => {
    const { children, onClose } = props
    const isEscPressed = useKeyPress('Escape')

    useEffect(() => {
        if (isEscPressed) {
            onClose()
        }
    }, [isEscPressed])

    const handleBackgroundClick = (event: MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    return (
        <Box onClick={handleBackgroundClick}>
            <Foreground>
                <Paper>{children}</Paper>
            </Foreground>
        </Box>
    )
}

export default RightPanelLayout
