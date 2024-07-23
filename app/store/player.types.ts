import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'


export type PlayerPlayAction = PayloadAction<string>

export type PlayerPlayOutput = {
    // ToDo
}

export type PlayerPlaySuccessAction = PayloadAction<PlayerPlayOutput>

type PlayerRequests = {
    playPlayer: RequestStatus
}

export type PlayerRequestNames = keyof PlayerRequests

export type PlayerState = {
    isPlaying: boolean
    requests: PlayerRequests
}
