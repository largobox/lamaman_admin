import React, { MouseEvent, useEffect, useState } from 'react'

import { defaultTheme } from 'themes'
import { useEscapeKeyPress } from 'hooks'
import { Paper } from 'uikit'
import { Props } from './BottomPanelLayout.types'
import Box, { Foreground } from './BottomPanelLayout.styles'


const BottomPanelLayout = (props: Props) => {
    const { children, onClose } = props
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEscapeKeyPress(() => {
        setIsVisible(false)

        setTimeout(() => {
            onClose()
        }, defaultTheme.transition.duration)
    }, 1)

    const handleBackgroundClick = (event: MouseEvent) => {
        if (event.target === event.currentTarget) {
            setIsVisible(false)

            setTimeout(() => {
                onClose()
            }, defaultTheme.transition.duration)
        }
    }

    return (
        <Box
            $isVisible={isVisible}
            onClick={handleBackgroundClick}
        >
            <Foreground $isVisible={isVisible}>
                <Paper>{children}</Paper>
            </Foreground>
        </Box>
    )
}

export default BottomPanelLayout
