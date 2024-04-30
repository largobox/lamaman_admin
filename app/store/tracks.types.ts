import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'
import { Sorting } from 'common-types'


export type Track = {
    id: string
    tracksCollectionId: string
    name: string
    createdAt: string
    updatedAt: string
}

export type TrackFormValues = {
    name: string
    tracksCollectionId: string
}

export type TracksSortings = 'name' | 'createdAt' | 'updatedAt'

type TracksRequests = {
    createTrack: RequestStatus
    deleteTrack: RequestStatus
    findTracks: RequestStatus
    getTrack: RequestStatus
    updateTrack: RequestStatus
}

export type TracksRequestNames = keyof TracksRequests

export type ChangeTracksRequestStatusAction = PayloadAction<{
    name: TracksRequestNames
    status: RequestStatus
}>

export type TracksState = {
    formValues: TrackFormValues
    items: Track[] | null
    itemsTotal: number | null
    page: number
    requests: TracksRequests
    sorting: Sorting<TracksSortings>
}
