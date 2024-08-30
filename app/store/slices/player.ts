import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    GET_TRACK_DESCRIPTION_PLAYER,
    GET_TRACK_FILE_PART_PLAYER,
} from 'consts'
import { RootState, ChangeRequestStatusAction } from 'store/store.types'
import {
    GetTrackDescriptionPlayerSuccessAction,
    PlayerRequestNames,
    PlayerState,
    SetPlayedDurationAction,
    SetTrackFilePartDurationEnd,
    SetTrackFilePartStartByteIndexAction,
} from 'store/player.types'
import { AudioPlayback, getDurationLabel } from 'utils'


const initialState: PlayerState = {
    currentTrack: null,
    isPlaying: true,
    playedDuration: 0,
    requests: {
        getTrackDescription: 'initial',
        getTrackFilePart: 'initial',
    },
    trackFilePartDurationEnd: 0,
    trackFilePartStartByteIndex: 0,
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
            state.currentTrack.file.duration =
                action.payload.file.duration * 1000

            state.requests.getTrackDescription = 'loaded'
        },

        end(state) {
            state.isPlaying = false
        },

        play(state) {
            const noAnyTrackFilePartWasLoaded =
                state.requests.getTrackFilePart === 'loading' ||
                state.trackFilePartStartByteIndex === 0

            if (noAnyTrackFilePartWasLoaded) {
                return
            }

            AudioPlayback.play()

            state.isPlaying = true
        },

        pause(state) {
            state.isPlaying = false

            AudioPlayback.pause()
        },

        reset(state) {
            state.currentTrack = null
            state.isPlaying = true
            state.playedDuration = 0
            state.requests = {
                getTrackDescription: 'initial',
                getTrackFilePart: 'initial',
            }
            state.trackFilePartDurationEnd = 0
            state.trackFilePartStartByteIndex = 0
        },

        setTrackFilePartDurationEnd(
            state,
            action: SetTrackFilePartDurationEnd,
        ) {
            state.trackFilePartDurationEnd = action.payload
        },

        setPlayedDuration(state, action: SetPlayedDurationAction) {
            state.playedDuration = action.payload
        },

        setTrackFilePartStartByteIndex(
            state,
            action: SetTrackFilePartStartByteIndexAction,
        ) {
            state.trackFilePartStartByteIndex = action.payload
        },
    },
})

// Actions
export const {
    changeRequestStatus,
    end,
    getTrackDescriptionPlayerSuccess,
    pause,
    play,
    reset,
    setPlayedDuration,
    setTrackFilePartDurationEnd,
    setTrackFilePartStartByteIndex,
} = playerSlice.actions

// Custom actions
export const getTrackFilePartPlayer = createAction(GET_TRACK_FILE_PART_PLAYER)

export const getTrackDescriptionPlayer = createAction<string>(
    GET_TRACK_DESCRIPTION_PLAYER,
)

// Selectors
export const isPlayingSelector = (state: RootState) => {
    return state.player.isPlaying
}

export const isGetTrackFilePartLoadingSelector = (state: RootState) => {
    return state.player.requests.getTrackFilePart === 'loading'
}

export const hasErrorSelector = (state: RootState) => {
    const hasError =
        state.player.requests.getTrackFilePart === 'error' ||
        state.player.requests.getTrackDescription === 'error'

    return hasError
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
    const onePercent = state.player.currentTrack.file.duration / 100

    return state.player.trackFilePartDurationEnd / onePercent
}

export const playedDurationLabelSelector = (state: RootState) => {
    return getDurationLabel(state.player.playedDuration)
}

export const playedDurationPercentSelector = (state: RootState) => {
    const onePercent = state.player.currentTrack.file.duration / 100

    return state.player.playedDuration / onePercent
}

export const totalDurationLabelSelector = (state: RootState) => {
    return getDurationLabel(state.player.currentTrack.file.duration)
}

export const getTrackFilePartPlayerParamsSelector = (state: RootState) => {
    const fileId = state.player.currentTrack.file.id
    const byteStep = 100000
    const start = state.player.trackFilePartStartByteIndex
    const end = start + byteStep - 1
    const params = {
        fileId,
        start,
        end,
    }

    return params
}

export default playerSlice
