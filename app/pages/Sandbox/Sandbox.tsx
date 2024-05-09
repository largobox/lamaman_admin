import React, { useEffect, useRef } from 'react'

import { AppLayout, PageLayout } from 'layouts'
import { Typography } from 'uikit'


const SandboxPage = () => {
    const videoRef = useRef()

    useEffect(() => {
        const videoEl = document.getElementById(
            'test-video',
        ) as HTMLMediaElement

        ;(async () => {
            try {
                // const devices = await navigator.mediaDevices.enumerateDevices()
                // console.log('devices: ', devices)

                const mediaStreamConstraints = {
                    video: true,
                    audio: false,
                }

                const mediaStream = await navigator.mediaDevices.getUserMedia(
                    mediaStreamConstraints,
                )

                // console.log('mediaStream: ', mediaStream)

                videoEl.srcObject = mediaStream
            } catch (error) {
                console.log('Error: ', { error })
            }
        })()
    }, [])

    return (
        <AppLayout>
            <PageLayout>
                <Typography text='Тестирование видео/аудио передачи' />

                <video
                    id='test-video'
                    ref={videoRef}
                    autoPlay
                />
            </PageLayout>
        </AppLayout>
    )
}

export default SandboxPage
