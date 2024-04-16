import { Sorting, SortingDirection } from 'common-types'
import store from './store'
import { PayloadAction } from '@reduxjs/toolkit'
import { CurrentUser } from 'system/utils/utils.types'

// common
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

type RequestStatus = 'initial' | 'loading' | 'loaded' | 'error'

export type ChangeSortingAction<T> = PayloadAction<{
    name: T
    direction: SortingDirection
}>

export type FindInput<T> = {
    sortingName: T
    sortingDirection: SortingDirection
    page: string
    limit: string
}

// toasts
type ToastType = 'error' | 'info' | 'warning'

export type Toast = {
    message: string
    toastType: ToastType
}

export type ToastsState = {
    items: Toast[]
}

// tracks collections
export type TracksCollection = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}

export type ChangeItemsAction = PayloadAction<TracksCollection[]>

export type ChangePageAction = PayloadAction<number>

export type TracksCollectionFormValues = {
    name: string
}

export type CreateTracksCollectionPayload = {
    data: TracksCollectionFormValues
}
export type CreateTracksCollectionAction =
    PayloadAction<CreateTracksCollectionPayload>

export type DeleteTracksCollectionAction = PayloadAction<string>

export type GetTracksCollectionAction = PayloadAction<string>

export type UpdateTracksCollectionPayload = {
    id: string
    data: TracksCollectionFormValues
}
export type UpdateTracksCollectionAction =
    PayloadAction<UpdateTracksCollectionPayload>

export type TracksCollectionsSortings = 'name' | 'createdAt'

export type FindTracksCollectionsInput = FindInput<TracksCollectionsSortings>
export type FindTracksCollectionsOutput = {
    items: TracksCollection[]
    meta: {
        sorting: Sorting<TracksCollectionsSortings>
        total: number
    }
}

export type HandleFindTracksCollectionsSuccessAction =
    PayloadAction<FindTracksCollectionsOutput>

export type HandleGetTracksCollectionsSuccessAction =
    PayloadAction<GetTracksCollectionOutput>

export type GetTracksCollectionArgs = string
export type GetTracksCollectionReturn = TracksCollection

export type GetTracksCollectionOutput = TracksCollection

export type UpdateTracksCollectionReturn = boolean
export type UpdateTracksCollectionArgs = {
    id: string
    data: TracksCollectionFormValues
}

type TracksCollectionsRequests = {
    createTracksCollection: RequestStatus
    deleteTracksCollection: RequestStatus
    findTracksCollections: RequestStatus
    getTracksCollection: RequestStatus
    updateTracksCollection: RequestStatus
}

type TracksCollectionsRequestNames = keyof TracksCollectionsRequests

export type ChangeTracksCollectionsRequestStatusAction = PayloadAction<{
    name: TracksCollectionsRequestNames
    status: RequestStatus
}>

export type TracksCollectionsState = {
    formValues: TracksCollectionFormValues
    items: TracksCollection[] | null
    itemsTotal: number | null
    page: number
    requests: TracksCollectionsRequests
    sorting: Sorting<TracksCollectionsSortings>
}

// authentication
export type AuthorizationLoginFormValues = {
    login: string
    password: string
}

export type AuthorizationLoginActionPayload = {
    data: AuthorizationLoginFormValues
}

export type AuthorizationLoginAction =
    PayloadAction<AuthorizationLoginActionPayload>

export type AuthorizationSignInAction = PayloadAction<string>

type AuthorizationRequests = {
    login: RequestStatus
}

type AuthorizationRequestNames = keyof AuthorizationRequests

export type ChangeAuthorizationRequestStatusAction = PayloadAction<{
    name: AuthorizationRequestNames
    status: RequestStatus
}>

export type AuthorizationState = {
    currentUser: null | CurrentUser
    formValues: AuthorizationLoginFormValues
    requests: AuthorizationRequests
}
