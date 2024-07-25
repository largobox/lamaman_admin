import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'


type PlayerCurrentTrack = {
    id: string
    name: string
    file: {
        duration: number
        size: number
    }
    performer: {
        id: string
        name: string
    }
}

type PlayerRequests = {
    getTrackDescription: RequestStatus
    getTrackPart: RequestStatus
}

export type GetTrackDescriptionPlayerAction = PayloadAction<string>

export type GetTrackDescriptionPlayerOutput = PlayerCurrentTrack

export type GetTrackDescriptionPlayerSuccessAction =
    PayloadAction<GetTrackDescriptionPlayerOutput>

export type PlayerRequestNames = keyof PlayerRequests

export type PlayerState = {
    currentTrack: null | PlayerCurrentTrack
    isPlaying: boolean
    loadededDuration: number
    playedDuration: number
    requests: PlayerRequests
}
