import React, { useEffect } from 'react'

import Box, {
    ContorlsBox,
    ContorlsAndDescriptionBox,
    DescriptionBox,
    DurationBox,
    LoadingProgressBar,
    PlayingProgressBar,
    PropBox,
    PropLabel,
    TotalProgressBar,
} from './Player.styles'
import { IconButton, Typography } from 'uikit'
import { PauseIcon, PlayIcon } from 'icons'
import {
    currentTrackSelector,
    end,
    hasErrorSelector,
    isPlayingSelector,
    isGetTrackFilePartLoadingSelector,
    getTrackFilePartPlayer,
    loadedDurationPercentSelector,
    pause,
    play,
    playedDurationLabelSelector,
    playedDurationPercentSelector,
    reset,
    setTrackFilePartDurationEnd,
    setPlayedDuration,
    totalDurationLabelSelector,
} from 'store/slices/player'
import { useAppDispatch, useAppSelector, useKeyPress } from 'hooks'
import { AudioPlayback } from 'utils'


const Player = () => {
    const appDispatch = useAppDispatch()
    const currentTrack = useAppSelector(currentTrackSelector)
    const hasError = useAppSelector(hasErrorSelector)
    const isPlaying = useAppSelector(isPlayingSelector)
    const isGetTrackFilePartLoading = useAppSelector(
        isGetTrackFilePartLoadingSelector,
    )
    const loadedDurationPercent = useAppSelector(loadedDurationPercentSelector)
    const playedDurationLabel = useAppSelector(playedDurationLabelSelector)
    const playedDurationPercent = useAppSelector(playedDurationPercentSelector)
    const totalDurationLabel = useAppSelector(totalDurationLabelSelector)

    const isSpacePressed = useKeyPress(' ')

    useEffect(() => {
        AudioPlayback.init({
            onTick: (ms) => {
                appDispatch(setPlayedDuration(ms))
            },
            onEnd: () => {
                appDispatch(end())
            },
            onNextChunkNeeded: () => {
                appDispatch(getTrackFilePartPlayer())
            },
            onChunkLoaded: (ms) => {
                appDispatch(setTrackFilePartDurationEnd(ms))
            },
            size: currentTrack.file.size,
        })

        appDispatch(getTrackFilePartPlayer())

        return () => {
            appDispatch(reset())
            AudioPlayback.clear()
        }
    }, [])

    useEffect(() => {
        if (isSpacePressed && !isPlaying) {
            appDispatch(play())

            return
        }

        if (isSpacePressed && isPlaying) {
            appDispatch(pause())

            return
        }
    }, [isSpacePressed])

    const playHandler = () => {
        appDispatch(play())
    }

    const pauseHandler = () => {
        appDispatch(pause())
    }

    return (
        <Box>
            <ContorlsAndDescriptionBox>
                <ContorlsBox>
                    {!isPlaying && (
                        <IconButton
                            isDisabled={hasError}
                            Icon={PlayIcon}
                            onClick={playHandler}
                            size='big'
                        />
                    )}

                    {isPlaying && (
                        <IconButton
                            isDisabled={hasError}
                            Icon={PauseIcon}
                            onClick={pauseHandler}
                            size='big'
                        />
                    )}
                </ContorlsBox>

                <DescriptionBox>
                    <PropBox>
                        <PropLabel>
                            <Typography
                                text='Название: '
                                variant='caption'
                            />
                        </PropLabel>

                        <Typography text={currentTrack.name} />
                    </PropBox>

                    <PropBox>
                        <PropLabel>
                            <Typography
                                text='Исполнитель: '
                                variant='caption'
                            />
                        </PropLabel>

                        <Typography text={currentTrack.performer.name} />
                    </PropBox>
                </DescriptionBox>
            </ContorlsAndDescriptionBox>

            <TotalProgressBar $hasError={hasError}>
                <LoadingProgressBar
                    $hasError={hasError}
                    $isLoading={isGetTrackFilePartLoading}
                    $width={loadedDurationPercent}
                />

                <PlayingProgressBar
                    $hasError={hasError}
                    $width={playedDurationPercent}
                />
            </TotalProgressBar>

            <DurationBox>
                <Typography text={playedDurationLabel} />

                <Typography text='/' />

                <Typography text={totalDurationLabel} />
            </DurationBox>
        </Box>
    )
}

export default Player
