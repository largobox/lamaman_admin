import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'
import { FileMetaData, Sorting } from 'common-types'
import { SelectableItem } from './selectables.types'


export type Track = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}

export type TrackPlayAction = PayloadAction<string>

export type TrackPlayOutput = {
    // ToDo
}

export type TrackPlaySuccessAction = PayloadAction<TrackPlayOutput>

export type TrackFormValues = {
    file: File | null
    name: string
    performerId: string
    tracksCollectionIds: string[] | null
}

export type TrackFormInitialValues = {
    file: FileMetaData | null
    name: string
    performerId: string
    tracksCollectionIds: string[]
}

export type TrackFormInitialMetaData = {
    performer: SelectableItem
    tracksCollections: SelectableItem[]
    file: FileMetaData
}

export type TrackGetOutput = {
    file: FileMetaData
    name: string
    performer: SelectableItem
    tracksCollections: SelectableItem[]
}

export type TracksSortings = 'name' | 'createdAt' | 'updatedAt'

type TracksRequests = {
    createTrack: RequestStatus
    deleteTrack: RequestStatus
    findTracks: RequestStatus
    getTrack: RequestStatus
    playTrack: RequestStatus
    updateTrack: RequestStatus
}

export type TracksRequestNames = keyof TracksRequests

export type ChangeTracksRequestStatusAction = PayloadAction<{
    name: TracksRequestNames
    status: RequestStatus
}>

export type TracksState = {
    formInitialValues: TrackFormInitialValues
    formInitialMetaData: TrackFormInitialMetaData
    items: Track[] | null
    itemsTotal: number | null
    page: number
    requests: TracksRequests
    sorting: Sorting<TracksSortings>
}
