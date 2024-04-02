import { Sorting, SortingDirection } from 'common-types'
import store from './store'
import { PayloadAction } from '@reduxjs/toolkit'


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

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
type TracksCollection = {
    id: string
    name: string
    createdAt: string
}

export type TracksCollectionsState = {
    currentSorting: Sorting
    page: number
}

export type ChangeCurrentSortingAction = PayloadAction<{
    name: string
    direction: SortingDirection
}>

export type ChangePageAction = PayloadAction<number>

export type CreateTracksCollectionArgs = {
    name: string
}

export type CreateTracksCollectionReturn = {
    id: string
}

export type FindTracksCollectionsArgs = {
    sorting: Sorting
    page: number
}

export type FindTracksCollectionsReturn = {
    items: TracksCollection[]
    meta: {
        sorting: Sorting
        total: number
    }
}

// authentication
export type LoginArgs = {
    login: string
    password: string
}

export type LoginReturn = string
