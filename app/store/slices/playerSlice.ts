import { createSlice, createAction } from '@reduxjs/toolkit'

import { PLAY_PLAYER } from 'consts'
import { RootState, ChangeRequestStatusAction } from 'store/store.types'
import {
    PlayerPlaySuccessAction,
    PlayerRequestNames,
    PlayerState,
} from 'store/player.types'


const initialState: PlayerState = {
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
    // ToDo
    return state.player.requests.playPlayer !== 'loading'
}

export default playerSlice
