import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'
import { FileMetaData, Sorting } from 'common-types'
import { SelectableItem } from './selectables.types'


export type Track = {
    id: string
    tracksCollectionId: string // ToDo
    name: string
    file: FileMetaData
    createdAt: string
    updatedAt: string
}

export type TrackFormValues = {
    file: File | null
    name: string
    performerId: string
    tracksCollectionId: string
}

export type TrackFormInitialValues = {
    file: FileMetaData | null
    name: string
    performerId: string
    tracksCollectionId: string
}

export type TrackGetOutput = {
    file: FileMetaData
    name: string
    performer: SelectableItem
    tracksCollection: SelectableItem
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
    formInitialValues: TrackFormInitialValues
    items: Track[] | null
    itemsTotal: number | null
    page: number
    requests: TracksRequests
    sorting: Sorting<TracksSortings>
}
