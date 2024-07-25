import React from 'react'

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
    isPlayingSelector,
    isTrackPartLoadingSelector,
    loadedDurationPercentSelector,
    playedDurationLabelSelector,
    playedDurationPercentSelector,
    totalDurationLabelSelector,
} from 'store/slices/player'
import { useAppSelector } from 'hooks'


const Player = () => {
    const currentTrack = useAppSelector(currentTrackSelector)
    const isPlaying = useAppSelector(isPlayingSelector)
    const isTrackPartLoading = useAppSelector(isTrackPartLoadingSelector)
    const loadedDurationPercent = useAppSelector(loadedDurationPercentSelector)
    const playedDurationLabel = useAppSelector(playedDurationLabelSelector)
    const playedDurationPercent = useAppSelector(playedDurationPercentSelector)
    const totalDurationLabel = useAppSelector(totalDurationLabelSelector)

    const playHandler = () => {
        console.log('Play')
    }

    const pauseHandler = () => {
        console.log('Pause')
    }

    return (
        <Box>
            <ContorlsAndDescriptionBox>
                <ContorlsBox>
                    {!isPlaying && (
                        <IconButton
                            Icon={PlayIcon}
                            onClick={playHandler}
                            size='big'
                        />
                    )}

                    {isPlaying && (
                        <IconButton
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

            <TotalProgressBar>
                <LoadingProgressBar
                    $isLoading={isTrackPartLoading}
                    $width={loadedDurationPercent}
                />

                <PlayingProgressBar $width={playedDurationPercent} />
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
