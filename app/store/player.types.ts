import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'


type PlayerCurrentTrack = {
    id: string
    name: string
    file: {
        id: string
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
    getTrackFilePart: RequestStatus
}

export type GetTrackFilePartParamsPlayer = {
    fileId: string
    start: number
    end: number
}

// ToDo. Rename to GetTrackDataPlayerAction
export type GetTrackDescriptionPlayerAction = PayloadAction<string>

export type GetTrackDescriptionPlayerOutput = PlayerCurrentTrack

export type GetTrackDescriptionPlayerSuccessAction =
    PayloadAction<GetTrackDescriptionPlayerOutput>

export type SetPlayedDurationAction = PayloadAction<number>

export type SetTrackFilePartDurationEnd = PayloadAction<number>

export type SetTrackFilePartStartByteIndexAction = PayloadAction<number>

export type PlayerRequestNames = keyof PlayerRequests

export type PlayerState = {
    currentTrack: null | PlayerCurrentTrack // ToDo. Rename to trackData
    isPlaying: boolean
    playedDuration: number
    requests: PlayerRequests
    trackFilePartDurationEnd: number
    trackFilePartStartByteIndex: number
}
