import React, { useEffect, useState } from 'react'

import Box, { MessageBox, IconBox } from './Toasts.styles'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import { currentToastSelector, removeToast } from 'store/slices/toasts'
import { defaultTheme } from 'themes'
import { DangerIcon } from 'icons'


const Toasts = () => {
    const currentToast = useAppSelector(currentToastSelector)
    const [isVisible, setIsVisible] = useState(false)
    const toastMessage = currentToast !== null ? currentToast.message : ''
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (currentToast === null) return

        setIsVisible(true)

        setTimeout(() => {
            setIsVisible(false)

            setTimeout(() => {
                dispatch(removeToast(currentToast.message))
            }, defaultTheme.transition.duration)
        }, 4000)
    }, [currentToast])

    return (
        <Box $isVisible={isVisible}>
            <MessageBox>
                <IconBox>
                    <DangerIcon color='danger' />
                </IconBox>

                <Typography
                    text={toastMessage}
                    color='inherit'
                />
            </MessageBox>
        </Box>
    )
}

export default Toasts
