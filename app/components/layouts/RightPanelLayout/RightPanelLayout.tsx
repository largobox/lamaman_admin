import React, { MouseEvent, useEffect, useState } from 'react'

import Box, { Foreground } from './RightPanelLayout.styles'
import { Paper } from 'uikit'
import { Props } from './RightPanelLayout.types'
import { useEscapeKeyPress } from 'hooks'
import { defaultTheme } from 'themes'


const RightPanelLayout = (props: Props) => {
    const { children, onClose } = props
    // ToDo. Move state to store for resolve problem with submit form
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

export default RightPanelLayout
