import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'


type PlayerCurrentTrack = {
    id: string
    name: string
    duration: number
    performer: {
        id: string
        name: string
    }
}

type PlayerRequests = {
    playPlayer: RequestStatus
}

export type PlayerPlayAction = PayloadAction<string>

export type PlayerPlayOutput = PlayerCurrentTrack

export type PlayerPlaySuccessAction = PayloadAction<PlayerPlayOutput>

export type PlayerRequestNames = keyof PlayerRequests

export type PlayerState = {
    currentTrack: null | PlayerCurrentTrack
    isPlaying: boolean
    loadededDuration: number
    playedDuration: number
    requests: PlayerRequests
}
