import { createSlice, createAction } from '@reduxjs/toolkit'

import { PLAY_PLAYER } from 'consts'
import { RootState, ChangeRequestStatusAction } from 'store/store.types'
import {
    PlayerPlaySuccessAction,
    PlayerRequestNames,
    PlayerState,
} from 'store/player.types'
import { getDurationLabel } from 'utils'


const initialState: PlayerState = {
    // ToDo
    // currentTrack: null,
    currentTrack: {
        id: '1',
        name: 'Some track name',
        duration: 182010,
        performer: {
            id: '2',
            name: 'Unknown',
        },
    },
    loadededDuration: 40000, // ToDo
    playedDuration: 15000, // ToDo
    isPlaying: true,
    requests: {
        playPlayer: 'initial',
    },
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changeRequestStatus(
            state,
            action: ChangeRequestStatusAction<PlayerRequestNames>,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        playPlayerSuccess(state, action: PlayerPlaySuccessAction) {
            // ToDo
            console.log('action: ', action)

            state.requests.playPlayer = 'loaded'
        },
    },
})

// Actions
export const { changeRequestStatus, playPlayerSuccess } = playerSlice.actions

// Custom actions
export const playPlayer = createAction<string>(PLAY_PLAYER)

// Selectors
export const isPlayingSelector = (state: RootState) => {
    return state.player.isPlaying
}

export const isLoadingSelector = (state: RootState) => {
    return state.player.requests.playPlayer === 'loading'
}

export const isLoadedSelector = (state: RootState) => {
    // ToDo. Пока специально неправильно сделано
    return state.player.requests.playPlayer !== 'loading'
}

export const currentTrackSelector = (state: RootState) => {
    return state.player.currentTrack
}

export const loadedDurationPercentSelector = (state: RootState) => {
    const onePercent = state.player.currentTrack.duration / 100

    return state.player.loadededDuration / onePercent
}

export const playedDurationLabelSelector = (state: RootState) => {
    return getDurationLabel(state.player.playedDuration)
}

export const playedDurationPercentSelector = (state: RootState) => {
    const onePercent = state.player.currentTrack.duration / 100

    return state.player.playedDuration / onePercent
}

export const totalDurationLabelSelector = (state: RootState) => {
    return getDurationLabel(state.player.currentTrack.duration)
}

export default playerSlice
