import { SortingDirection, TableSorting } from 'common-types'
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
export type TracksCollectionsState = {
    currentSorting: TableSorting
}

export type ChangeCurrentSortingAction = PayloadAction<{
    name: string
    direction: SortingDirection
}>

// api
export type LoginArgs = {
    login: string
    password: string
}

export type LoginReturn = string
