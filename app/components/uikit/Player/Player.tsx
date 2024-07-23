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
import { getDurationLabel } from 'utils'
import { PauseIcon, PlayIcon } from 'icons'
import { isPlayingSelector } from 'store/slices/playerSlice'
import { useAppSelector } from 'hooks'


const Player = () => {
    const isPlaying = useAppSelector(isPlayingSelector)
    // ToDo. Move all data to store
    const trackData = {
        duration: 182010,
        name: 'Some track name',
        performer: {
            id: '1',
            name: 'Unknown',
        },
    }
    const playedDuration = 15000
    const playedDurationLabel = getDurationLabel(playedDuration)
    const totalDurationLabel = getDurationLabel(trackData.duration)
    const playedDurationPercent = playedDuration / (trackData.duration / 100)
    const loadedDurationPercent = 20

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

                        <Typography text={trackData.name} />
                    </PropBox>

                    <PropBox>
                        <PropLabel>
                            <Typography
                                text='Исполнитель: '
                                variant='caption'
                            />
                        </PropLabel>

                        <Typography text={trackData.performer.name} />
                    </PropBox>
                </DescriptionBox>
            </ContorlsAndDescriptionBox>

            <TotalProgressBar>
                <LoadingProgressBar $width={loadedDurationPercent} />

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
