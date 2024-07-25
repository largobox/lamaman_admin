import { createSlice, createAction } from '@reduxjs/toolkit'

import { GET_TRACK_DESCRIPTION_PLAYER } from 'consts'
import { RootState, ChangeRequestStatusAction } from 'store/store.types'
import {
    GetTrackDescriptionPlayerSuccessAction,
    PlayerRequestNames,
    PlayerState,
} from 'store/player.types'
import { getDurationLabel } from 'utils'


const initialState: PlayerState = {
    currentTrack: null,
    loadededDuration: 40000, // ToDo
    playedDuration: 15000, // ToDo
    isPlaying: true,
    requests: {
        getTrackDescription: 'initial',
        getTrackPart: 'initial',
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

        getTrackDescriptionPlayerSuccess(
            state,
            action: GetTrackDescriptionPlayerSuccessAction,
        ) {
            state.currentTrack = action.payload

            state.requests.getTrackDescription = 'loaded'
        },
    },
})

// Actions
export const { changeRequestStatus, getTrackDescriptionPlayerSuccess } =
    playerSlice.actions

// Custom actions
export const getTrackDescriptionPlayer = createAction<string>(
    GET_TRACK_DESCRIPTION_PLAYER,
)

// Selectors
export const isPlayingSelector = (state: RootState) => {
    return state.player.isPlaying
}

export const isTrackPartLoadingSelector = (state: RootState) => {
    return state.player.requests.getTrackPart === 'loading'
}

export const isLoadingSelector = (state: RootState) => {
    return state.player.requests.getTrackDescription === 'loading'
}

export const isLoadedSelector = (state: RootState) => {
    return state.player.requests.getTrackDescription === 'loaded'
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
