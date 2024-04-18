import { Sorting } from 'common-types'
import { RequestStatus } from './store.types'


type TracksCollectionsRequests = {
    createTracksCollection: RequestStatus
    deleteTracksCollection: RequestStatus
    findTracksCollections: RequestStatus
    getTracksCollection: RequestStatus
    updateTracksCollection: RequestStatus
}

export type TracksCollectionsRequestNames = keyof TracksCollectionsRequests

export type TracksCollectionFormValues = {
    name: string
}

export type TracksCollection = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}

export type TracksCollectionsSortings = 'name' | 'createdAt' | 'updatedAt'

export type TracksCollectionsState = {
    formValues: TracksCollectionFormValues
    items: TracksCollection[] | null
    itemsTotal: number | null
    page: number
    requests: TracksCollectionsRequests
    sorting: Sorting<TracksCollectionsSortings>
}
